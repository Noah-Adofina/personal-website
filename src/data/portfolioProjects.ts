export interface PortfolioImage {
  src: string;
  full: string;
  alt: string;
  caption: string;
}

export interface PortfolioLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  stack: string[];
  images: PortfolioImage[];
  links: PortfolioLink[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'pablomi', title: 'Pablomi', category: 'Current project / desktop social app', featured: true,
    summary: 'A desktop-first social and messaging app for gamers, bringing conversations, friends, profiles, themes, and voice into one place. It is preparing for private testing.',
    context: 'I independently designed and developed the React client, Tauri 2 desktop app, Node/Express API, PostgreSQL data layer, realtime messaging, voice integration, and separate moderation tools.',
    stack: ['React', 'Tauri 2 / Rust', 'Node / Express', 'PostgreSQL', 'Socket.io', 'Firebase Auth', 'WebRTC'],
    images: [
      { src: '/projects/pablomi-chat.webp', full: '/projects/full/chat.png', alt: 'Pablomi chat interface with a friends sidebar and message thread.', caption: 'Chat / current development build' },
      { src: '/projects/pablomi-friends.webp', full: '/projects/full/friends.png', alt: 'Pablomi friends screen with profile cards and persistent sidebar.', caption: 'Friends / current development build' },
      { src: '/projects/pablomi-profile.webp', full: '/projects/full/profile.png', alt: 'Pablomi profile with a personal background and social links.', caption: 'Profile / current development build' },
      { src: '/projects/pablomi-themes.webp', full: '/projects/full/themes.png', alt: 'Pablomi settings showing a searchable theme gallery.', caption: 'Themes / current development build' },
      { src: '/projects/pablomi-voice.webp', full: '/projects/full/voice.png', alt: 'Pablomi chat view with voice controls in the sidebar.', caption: 'Voice / current development build' },
    ],
    links: [
      { label: 'Read case study', href: '/work/pablomi' },
      { label: 'Visit Pablomi website', href: 'https://pablomi.me', external: true },
    ],
  },
  {
    slug: 'comfy-cafe', title: 'Comfy Cafe', category: 'Game development / unfinished prototype', featured: true,
    summary: 'An unfinished cozy game prototype where I learned Godot and GDScript by building gameplay systems and placeholder art.',
    context: 'I took on more than I could finish. It taught me to break large ideas into smaller systems and work on the foundation before adding more features.',
    stack: ['Godot', 'GDScript'],
    images: [
      { src: '/projects/comfy-cafe.webp', full: '/projects/full/comfy-cafe.webp', alt: 'Comfy Cafe game prototype showing a pastel cafe counter and gameplay scene.', caption: 'Cafe scene / prototype footage still' },
      { src: '/projects/comfy-cafe-store.webp', full: '/projects/full/comfy-cafe-store.webp', alt: 'Comfy Cafe prototype showing its store interface over the game scene.', caption: 'Store interface / prototype footage still' },
    ],
    links: [{ label: 'View repository', href: 'https://github.com/Noah-Adofina/coffee-game', external: true }],
  },
  {
    slug: 'inventory-tracker', title: 'Inventory Tracker', category: 'Full-stack web app', featured: true,
    summary: 'A small inventory app for adding items, changing quantities, and removing entries stored in Firebase.',
    context: 'I used Next.js, Tailwind, and Firestore while learning how to connect a web interface to persistent data.',
    stack: ['Next.js', 'Tailwind CSS', 'Firebase Firestore'],
    images: [{ src: '/projects/inventory-tracker.webp', full: '/projects/full/inventory-tracker.JPG', alt: 'Inventory Tracker interface listing items and quantities.', caption: 'Inventory Tracker interface' }],
    links: [
      { label: 'View repository', href: 'https://github.com/Noah-Adofina/inventory-tracker', external: true },
      { label: 'Watch preview', href: 'https://www.youtube.com/watch?v=6z0m79pZjJs', external: true },
    ],
  },
  {
    slug: 'ai-flashcard-saas', title: 'AI Flashcard SaaS', category: 'Full-stack learning project', featured: true,
    summary: 'An account-based flashcard app that generates study sets from a topic and stores them for later use.',
    context: 'I connected Clerk authentication, Firebase data, and OpenAI generation in a Next.js app. Stripe was explored in test mode; paid access was not completed.',
    stack: ['Next.js', 'Firebase', 'Clerk', 'OpenAI API'],
    images: [{ src: '/projects/ai-flashcards.webp', full: '/projects/full/ai-flashcard-saas.JPG', alt: 'AI Flashcard SaaS landing page with sign-in and sign-up links.', caption: 'AI Flashcard SaaS landing page' }],
    links: [
      { label: 'View repository', href: 'https://github.com/Noah-Adofina/flashcard-saas', external: true },
      { label: 'Watch preview', href: 'https://www.youtube.com/watch?v=bQ0YuZyFp4A', external: true },
      { label: 'Visit demo', href: 'https://flashcard-saas-ecru.vercel.app/', external: true },
    ],
  },
  {
    slug: 'number-predictor', title: "Noah’s Number Predictor", category: 'Machine learning experiment', featured: true,
    summary: 'Draw a digit in the browser and see a model trained on MNIST try to identify it.',
    context: 'I trained a small PyTorch model, then built a web interface so I could test it with hand-drawn input. The original notes describe accuracy and mobile drawing limits, so I treat this as a learning project.',
    stack: ['PyTorch', 'Python', 'JavaScript'],
    images: [
      { src: '/projects/number-predictor.webp', full: '/projects/full/noahs-number-predictor.JPG', alt: 'Number Predictor drawing canvas and prediction result.', caption: 'Drawing interface' },
      { src: '/projects/number-predictor-2.webp', full: '/projects/full/noahs-number-predictor-2.JPG', alt: 'Number Predictor showing a hand-drawn eight and its prediction.', caption: 'Another drawn digit' },
      { src: '/projects/mnist-training-chart.webp', full: '/projects/full/mnist-training-chart.png', alt: 'Chart from the MNIST model training experiment.', caption: 'Training chart' },
    ],
    links: [
      { label: 'View app repository', href: 'https://github.com/Noah-Adofina/noahs-number-predictor--MNIST-NN', external: true },
      { label: 'View model repository', href: 'https://github.com/Noah-Adofina/MNIST-NN', external: true },
      { label: 'Visit demo', href: 'https://noahs-number-predictor-mnist-nn.vercel.app/', external: true },
    ],
  },
  {
    slug: 'ai-chat-support', title: 'AI Chat Support Bot', category: 'API experiment',
    summary: 'A support-chat experiment that streams responses from the OpenAI API.',
    context: 'Built with Next.js and Tailwind during my Headstarter fellowship.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API'],
    images: [{ src: '/projects/ai-chatbot.webp', full: '/projects/full/ai-chatbot.JPG', alt: 'AI Chat Support Bot chat interface.', caption: 'Chat Support Bot interface' }],
    links: [
      { label: 'View repository', href: 'https://github.com/Noah-Adofina/chat-support', external: true },
      { label: 'Watch preview', href: 'https://www.youtube.com/watch?v=jhW8qqaSUR8', external: true },
    ],
  },
  {
    slug: 'rate-my-professor-rag', title: 'Rate My Professor RAG App', category: 'Retrieval experiment',
    summary: 'A chat experiment that uses retrieved professor-rating data to answer questions.',
    context: 'The original write-up documents Next.js, OpenAI, and Pinecone. Its repository link pointed to the unrelated flashcard project, so only the preview is linked here.',
    stack: ['Next.js', 'OpenAI API', 'Pinecone'],
    images: [{ src: '/projects/ai-rag.webp', full: '/projects/full/ai-rag.JPG', alt: 'Rate My Professor RAG chat interface.', caption: 'RAG app interface' }],
    links: [{ label: 'Watch preview', href: 'https://www.youtube.com/watch?v=08Ij0BtF71c', external: true }],
  },
  {
    slug: 'pong', title: 'Pong Recreation', category: 'First game project',
    summary: 'A two-player Pong recreation I built while teaching myself C# and Unity.',
    context: 'A first playable game that also taught me why different screen resolutions matter.',
    stack: ['Unity', 'C#'],
    images: [{ src: '/projects/pong.webp', full: '/projects/full/pong.webp', alt: 'Pong recreation with two paddles, a ball, and score display.', caption: 'Pong gameplay / footage still' }],
    links: [{ label: 'View repository', href: 'https://github.com/Noah-Adofina/Pong_First_Game', external: true }],
  },
  {
    slug: 'serenity-yoga', title: 'Serenity Yoga Studio', category: 'Website exercise',
    summary: 'A multi-page studio website I designed and built to practice HTML, CSS, and JavaScript.',
    context: 'I sketched it in Figma and translated the pages into a responsive site.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    images: [
      { src: '/projects/serenity-1.webp', full: '/projects/full/serenity-yoga-studio.JPG', alt: 'Serenity Yoga Studio homepage design.', caption: 'Serenity homepage' },
      { src: '/projects/serenity-2.webp', full: '/projects/full/serenity-yoga-studio-2.JPG', alt: 'Serenity Yoga Studio interior page.', caption: 'Serenity interior page' },
      { src: '/projects/serenity-3.webp', full: '/projects/full/serenity-yoga-studio-3.JPG', alt: 'Another Serenity Yoga Studio page.', caption: 'Serenity page detail' },
    ],
    links: [
      { label: 'View repository', href: 'https://github.com/Noah-Adofina/Serenity-Yoga-Studio', external: true },
      { label: 'Explore local demo', href: '/demos/serenity-yoga-studio/' },
    ],
  },
  {
    slug: 'discord-sound', title: 'Custom Discord Notification Sound', category: 'Small experiment',
    summary: 'A personal script experiment for replacing the notification sound I heard in Discord.',
    context: 'I worked through browser audio behavior by testing different approaches. No public repository or demo is listed in the original site.',
    stack: ['JavaScript'],
    images: [{ src: '/projects/discord-notification.webp', full: '/projects/full/discord-notification.JPG', alt: 'Interface from the custom notification sound experiment.', caption: 'Notification sound experiment' }],
    links: [],
  },
];

export const featuredProjects = portfolioProjects.filter((project) => project.featured);
export const archiveProjects = portfolioProjects.filter((project) => !project.featured);
