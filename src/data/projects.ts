export const projects = [
  {
    slug: 'pablomi',
    title: 'Pablomi',
    shortTitle: 'Pablomi',
    category: 'Flagship project / private testing',
    summary: 'My current flagship software project. In development and private testing; verified product visuals will be added when available.',
    stack: 'IN DEVELOPMENT / PRIVATE TESTING',
    image: null,
    alt: null,
    link: null,
    linkLabel: null
  },
  {
    slug: 'number-predictor',
    title: "Noah's Number Predictor",
    shortTitle: 'Number Predictor',
    category: 'Machine learning experiment',
    summary: 'Draw a digit and see a neural network predict the number.',
    stack: 'JavaScript / Python / neural network',
    image: '/projects/number-predictor.webp',
    alt: "Screenshot of Noah's Number Predictor showing a handwritten digit on a blue drawing canvas and its model prediction.",
    link: 'https://noahs-number-predictor-mnist-nn.vercel.app/',
    linkLabel: 'Open live project'
  },
  {
    slug: 'inventory-tracker',
    title: 'Inventory Tracker',
    shortTitle: 'Inventory Tracker',
    category: 'Full-stack web app',
    summary: 'A Firebase-backed inventory app for adding, editing, and removing items.',
    stack: 'React / Tailwind / Firebase',
    image: '/projects/inventory-tracker.webp',
    alt: 'Screenshot of the Inventory Tracker interface listing items and their editable quantities.',
    link: 'https://github.com/Noah-Adofina/inventory-tracker',
    linkLabel: 'View repository'
  }
] as const;
