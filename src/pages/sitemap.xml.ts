import type { APIRoute } from 'astro';

const paths = ['/', '/work/', '/work/pablomi/', '/about/', '/resume/', '/contact/'];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://noahadofina.com');
  const urls = paths.map((path) => `  <url><loc>${new URL(path, origin)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
