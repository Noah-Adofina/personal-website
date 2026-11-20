"""Regenerate the two 1200 x 630 portfolio social cards with Pillow.

Run: python scripts/generate_social_cards.py
Fonts: Windows Arial Bold and Georgia Italic; set SOCIAL_FONT_DIR to override.
The original Pablomi screenshot is read, never modified.
"""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "social"
FONTS = Path(os.environ.get("SOCIAL_FONT_DIR", "C:/Windows/Fonts"))
SCALE = 2
WIDTH, HEIGHT = 1200, 630
BG = "#101214"
WHITE = "#F4F5F2"
PINK = "#F6B8D1"
GREEN = "#39FF14"
MUTED = "#AEB7B4"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size * SCALE)


def label(draw: ImageDraw.ImageDraw, x: int, y: int, value: str, face: str, size: int, color: str) -> None:
    draw.text((x * SCALE, y * SCALE), value, font=font(face, size), fill=color, anchor="lt")


def spaced_label(draw: ImageDraw.ImageDraw, x: int, y: int, value: str, face: str, size: int, color: str, spacing: float) -> float:
    face_font = font(face, size)
    cursor = x * SCALE
    right = cursor
    for char in value:
        draw.text((cursor, y * SCALE), char, font=face_font, fill=color, anchor="lt")
        right = cursor + draw.textbbox((0, 0), char, font=face_font, anchor="lt")[2]
        cursor += draw.textlength(char, font=face_font) + spacing * SCALE
    return right / SCALE


def wordmark(draw: ImageDraw.ImageDraw) -> None:
    # Measure the actual right edge of NOAH and give the dot equal clear space on both sides.
    right = spaced_label(draw, 88, 78, "NOAH", "arialbd.ttf", 30, WHITE, 1.5)
    gap, radius = 11, 3.5
    dot_x = right + gap + radius
    dot_y = 95.5
    draw.ellipse(((dot_x - radius) * SCALE, (dot_y - radius) * SCALE,
                  (dot_x + radius) * SCALE, (dot_y + radius) * SCALE), fill=GREEN)
    spaced_label(draw, round(dot_x + radius + gap), 78, "ADOFINA", "arialbd.ttf", 30, WHITE, 1.5)


def base() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGB", (WIDTH * SCALE, HEIGHT * SCALE), BG)
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((58*SCALE, 53*SCALE, 1142*SCALE, 577*SCALE), radius=9*SCALE,
                           outline="#303836", width=2*SCALE)
    draw.rectangle((58*SCALE, 53*SCALE, 63*SCALE, 577*SCALE), fill=GREEN)
    wordmark(draw)
    draw.line(((87*SCALE, 530*SCALE), (1113*SCALE, 530*SCALE)), fill="#3A4340", width=2*SCALE)
    return image, draw


def save(image: Image.Image, name: str) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    image.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS).save(OUT / name, optimize=True)


def portfolio_card() -> None:
    image, draw = base()
    spaced_label(draw, 866, 85, "PERSONAL PORTFOLIO", "arialbd.ttf", 14, MUTED, 1.4)
    spaced_label(draw, 87, 157, "NOAH", "arialbd.ttf", 170, WHITE, -4)
    label(draw, 83, 327, "Adofina.", "georgiai.ttf", 150, PINK)
    draw.rectangle((834*SCALE, 379*SCALE, 839*SCALE, 478*SCALE), fill=GREEN)
    for y, value in [(386, "INDEPENDENT"), (425, "SOFTWARE"), (464, "ENGINEER")]:
        spaced_label(draw, 862, y, value, "arialbd.ttf", 24, WHITE, 1)
    spaced_label(draw, 88, 546, "SOFTWARE \u2022 PROJECTS \u2022 EXPERIMENTS", "arialbd.ttf", 13, MUTED, 1.4)
    spaced_label(draw, 891, 546, "NOAHADOFINA.COM", "arialbd.ttf", 13, GREEN, 1.1)
    save(image, "noah-adofina-v2.png")


def pablomi_card() -> None:
    image, draw = base()
    label(draw, 88, 174, "PABLOMI", "arialbd.ttf", 100, WHITE)
    label(draw, 91, 315, "Social + messaging", "georgiai.ttf", 43, PINK)
    label(draw, 92, 374, "for gamers.", "georgiai.ttf", 43, PINK)
    draw.rectangle((93*SCALE, 464*SCALE, 97*SCALE, 493*SCALE), fill=GREEN)
    label(draw, 111, 463, "PREPARING FOR PRIVATE TESTING", "arialbd.ttf", 15, WHITE)
    screenshot = Image.open(ROOT / "public" / "projects" / "pablomi-chat.webp").convert("RGB")
    screenshot = ImageOps.contain(screenshot, (530*SCALE, 300*SCALE), Image.Resampling.LANCZOS)
    x, y = 600*SCALE, 181*SCALE
    draw.rounded_rectangle((x+11*SCALE, y+13*SCALE, x+screenshot.width+11*SCALE,
                            y+screenshot.height+13*SCALE), radius=5*SCALE, fill=PINK)
    image.paste(screenshot, (x, y))
    draw.rectangle((x-SCALE, y-SCALE, x+screenshot.width+SCALE, y+screenshot.height+SCALE),
                   outline=WHITE, width=2*SCALE)
    label(draw, 88, 546, "INDEPENDENTLY DESIGNED & DEVELOPED", "arialbd.ttf", 13, MUTED)
    label(draw, 891, 546, "NOAHADOFINA.COM", "arialbd.ttf", 13, GREEN)
    save(image, "pablomi-v2.png")


if __name__ == "__main__":
    portfolio_card()
    pablomi_card()
