export interface PortfolioItem {
  id: number;
  title: string;
  category: 'graphic-design' | 'illustration' | 'art';
  image: string;
  description: string;
  year: number;
  client?: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  // Graphic Design Projects
  {
    id: 1,
    title: "Urban Coffee Brand Identity",
    category: "graphic-design",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
    description: "Complete brand identity design for a modern coffee shop including logo, packaging, and marketing materials.",
    year: 2024,
    client: "Urban Coffee Co.",
    featured: true
  },
  {
    id: 2,
    title: "Annual Report Design",
    category: "graphic-design",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    description: "Clean and professional annual report design for a tech startup, featuring infographics and data visualization.",
    year: 2024,
    client: "TechFlow Inc.",
    featured: true
  },
  {
    id: 3,
    title: "Music Festival Poster Series",
    category: "graphic-design",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    description: "Vibrant poster series for a summer music festival, capturing the energy and excitement of live music.",
    year: 2023,
    client: "Sunset Music Festival",
    featured: false
  },
  {
    id: 4,
    title: "Sustainable Fashion Campaign",
    category: "graphic-design",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description: "Marketing campaign design for an eco-friendly fashion brand, emphasizing sustainability and style.",
    year: 2024,
    client: "Green Threads",
    featured: false
  },
  
  // Illustration Projects
  {
    id: 5,
    title: "Children's Book Illustrations",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    description: "Whimsical illustrations for a children's adventure book about a young explorer and her magical journey.",
    year: 2024,
    client: "Storybook Publishing",
    featured: true
  },
  {
    id: 6,
    title: "Editorial Illustrations",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    description: "Series of editorial illustrations for a lifestyle magazine covering topics of wellness and mindfulness.",
    year: 2023,
    client: "Mindful Living Magazine",
    featured: false
  },
  {
    id: 7,
    title: "Corporate Character Design",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    description: "Friendly character mascot design for a fintech company's mobile app and marketing materials.",
    year: 2024,
    client: "FinanceFlow",
    featured: false
  },
  
  // Art Projects
  {
    id: 8,
    title: "Abstract Expressionism Series",
    category: "art",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop",
    description: "A collection of abstract paintings exploring themes of movement, emotion, and color relationships.",
    year: 2024,
    client: "Personal Work",
    featured: true
  },
  {
    id: 9,
    title: "Urban Landscapes",
    category: "art",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=400&fit=crop",
    description: "Mixed media artwork capturing the essence of city life through architectural forms and human movement.",
    year: 2023,
    client: "Gallery Exhibition",
    featured: false
  },
  {
    id: 10,
    title: "Nature Study Collection",
    category: "art",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    description: "Detailed botanical studies created with watercolor and ink, celebrating the beauty of natural forms.",
    year: 2024,
    client: "Personal Work",
    featured: false
  },
  {
    id: 11,
    title: "Portrait Series",
    category: "art",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop",
    description: "Contemporary portrait paintings focusing on expression, light, and the human condition.",
    year: 2023,
    client: "Solo Exhibition",
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All Work', count: portfolioItems.length },
  { id: 'graphic-design', name: 'Graphic Design', count: portfolioItems.filter(item => item.category === 'graphic-design').length },
  { id: 'illustration', name: 'Illustration', count: portfolioItems.filter(item => item.category === 'illustration').length },
  { id: 'art', name: 'Art', count: portfolioItems.filter(item => item.category === 'art').length },
];

export const featuredItems = portfolioItems.filter(item => item.featured);
