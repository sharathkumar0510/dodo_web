// Types for images and icons
export interface ImageAsset {
  id: number;
  name: string;
  description?: string;
  url: string;
  altText: string;
  type: 'banner' | 'thumbnail' | 'icon' | 'logo' | 'background' | 'avatar' | 'service' | 'category' | 'payment';
  category?: string;
  serviceId?: string;
  categoryId?: string;
  professionalId?: string;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}

// Mock data for images
const images: ImageAsset[] = [
  // Logos
  {
    id: 1,
    name: 'DoDoServices Logo',
    description: 'Main logo for DoDoServices',
    url: 'https://via.placeholder.com/200x80?text=DoDoServices',
    altText: 'DoDoServices Logo',
    type: 'logo',
    width: 200,
    height: 80,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },

  // Banners
  {
    id: 2,
    name: 'Home Banner',
    description: 'Main banner for homepage',
    url: 'https://via.placeholder.com/1200x400?text=Home+Services',
    altText: 'Home Services Banner',
    type: 'banner',
    category: 'home',
    width: 1200,
    height: 400,
    createdAt: '2023-01-02T00:00:00Z',
    updatedAt: '2023-01-02T00:00:00Z'
  },

  // Service Category Images
  {
    id: 3,
    name: 'Cleaning Services',
    description: 'Thumbnail for cleaning services category',
    url: 'https://via.placeholder.com/300x300?text=Cleaning',
    altText: 'Cleaning Services',
    type: 'thumbnail',
    category: 'service-category',
    width: 300,
    height: 300,
    createdAt: '2023-01-03T00:00:00Z',
    updatedAt: '2023-01-03T00:00:00Z'
  },
  {
    id: 4,
    name: 'AC Repair Services',
    description: 'Thumbnail for AC repair services category',
    url: 'https://via.placeholder.com/300x300?text=AC+Repair',
    altText: 'AC Repair Services',
    type: 'thumbnail',
    category: 'service-category',
    width: 300,
    height: 300,
    createdAt: '2023-01-03T00:00:00Z',
    updatedAt: '2023-01-03T00:00:00Z'
  },
  {
    id: 5,
    name: 'Salon Services',
    description: 'Thumbnail for salon services category',
    url: 'https://via.placeholder.com/300x300?text=Salon',
    altText: 'Salon Services',
    type: 'thumbnail',
    category: 'service-category',
    width: 300,
    height: 300,
    createdAt: '2023-01-03T00:00:00Z',
    updatedAt: '2023-01-03T00:00:00Z'
  },
  {
    id: 6,
    name: 'Home Repair Services',
    description: 'Thumbnail for home repair services category',
    url: 'https://via.placeholder.com/300x300?text=Home+Repair',
    altText: 'Home Repair Services',
    type: 'thumbnail',
    category: 'service-category',
    width: 300,
    height: 300,
    createdAt: '2023-01-03T00:00:00Z',
    updatedAt: '2023-01-03T00:00:00Z'
  },
  {
    id: 7,
    name: 'Home Painting Services',
    description: 'Thumbnail for home painting services category',
    url: 'https://via.placeholder.com/300x300?text=Painting',
    altText: 'Home Painting Services',
    type: 'thumbnail',
    category: 'service-category',
    width: 300,
    height: 300,
    createdAt: '2023-01-03T00:00:00Z',
    updatedAt: '2023-01-03T00:00:00Z'
  },

  // Hero Section Images
  {
    id: 8,
    name: 'Cleaning Hero',
    description: 'Hero image for cleaning services',
    url: 'https://via.placeholder.com/600x400?text=Professional+Cleaning',
    altText: 'Professional Cleaning Service',
    type: 'background',
    category: 'hero',
    width: 600,
    height: 400,
    createdAt: '2023-01-04T00:00:00Z',
    updatedAt: '2023-01-04T00:00:00Z'
  },
  {
    id: 9,
    name: 'Repair Hero',
    description: 'Hero image for repair services',
    url: 'https://via.placeholder.com/600x400?text=Professional+Repair',
    altText: 'Professional Repair Service',
    type: 'background',
    category: 'hero',
    width: 600,
    height: 400,
    createdAt: '2023-01-04T00:00:00Z',
    updatedAt: '2023-01-04T00:00:00Z'
  },
  {
    id: 10,
    name: 'Salon Hero',
    description: 'Hero image for salon services',
    url: 'https://via.placeholder.com/600x400?text=Professional+Salon',
    altText: 'Professional Salon Service',
    type: 'background',
    category: 'hero',
    width: 600,
    height: 400,
    createdAt: '2023-01-04T00:00:00Z',
    updatedAt: '2023-01-04T00:00:00Z'
  },
  {
    id: 11,
    name: 'Massage Hero',
    description: 'Hero image for massage services',
    url: 'https://via.placeholder.com/600x400?text=Professional+Massage',
    altText: 'Professional Massage Service',
    type: 'background',
    category: 'hero',
    width: 600,
    height: 400,
    createdAt: '2023-01-04T00:00:00Z',
    updatedAt: '2023-01-04T00:00:00Z'
  },

  // Icons
  {
    id: 12,
    name: 'Verified Icon',
    description: 'Icon for verified professionals',
    url: 'https://via.placeholder.com/50x50?text=✓',
    altText: 'Verified Professionals Icon',
    type: 'icon',
    category: 'features',
    width: 50,
    height: 50,
    createdAt: '2023-01-05T00:00:00Z',
    updatedAt: '2023-01-05T00:00:00Z'
  },
  {
    id: 13,
    name: 'Booking Icon',
    description: 'Icon for hassle-free booking',
    url: 'https://via.placeholder.com/50x50?text=📅',
    altText: 'Hassle-Free Booking Icon',
    type: 'icon',
    category: 'features',
    width: 50,
    height: 50,
    createdAt: '2023-01-05T00:00:00Z',
    updatedAt: '2023-01-05T00:00:00Z'
  },
  {
    id: 14,
    name: 'Pricing Icon',
    description: 'Icon for transparent pricing',
    url: 'https://via.placeholder.com/50x50?text=💰',
    altText: 'Transparent Pricing Icon',
    type: 'icon',
    category: 'features',
    width: 50,
    height: 50,
    createdAt: '2023-01-05T00:00:00Z',
    updatedAt: '2023-01-05T00:00:00Z'
  },

  // Service Icons
  {
    id: 15,
    name: 'Facial Icon',
    description: 'Icon for facial services',
    url: 'https://via.placeholder.com/64x64?text=Facial',
    altText: 'Facial Services Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-1', // Facial
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 16,
    name: 'Waxing Icon',
    description: 'Icon for waxing services',
    url: 'https://via.placeholder.com/64x64?text=Waxing',
    altText: 'Waxing Services Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-2', // Waxing
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 17,
    name: 'Haircut Icon',
    description: 'Icon for haircut services',
    url: 'https://via.placeholder.com/64x64?text=Haircut',
    altText: 'Haircut Services Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-3', // Haircut
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 18,
    name: 'Massage Icon',
    description: 'Icon for massage services',
    url: 'https://via.placeholder.com/64x64?text=Massage',
    altText: 'Massage Services Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-4', // Massage
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 19,
    name: 'AC Service Icon',
    description: 'Icon for AC service',
    url: 'https://via.placeholder.com/64x64?text=AC+Service',
    altText: 'AC Service Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-5', // AC Service & Repair
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 20,
    name: 'Bathroom Cleaning Icon',
    description: 'Icon for bathroom cleaning',
    url: 'https://via.placeholder.com/64x64?text=Bathroom',
    altText: 'Bathroom Cleaning Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-6', // Bathroom Cleaning
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 21,
    name: 'Pest Control Icon',
    description: 'Icon for pest control',
    url: 'https://via.placeholder.com/64x64?text=Pest+Control',
    altText: 'Pest Control Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-7', // Pest Control
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 22,
    name: 'Electrician Service Icon',
    description: 'Icon for electrician service',
    url: 'https://via.placeholder.com/64x64?text=Electrician+Service',
    altText: 'Electrician Service Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-8', // Electrician
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },
  {
    id: 23,
    name: 'Plumber Icon',
    description: 'Icon for plumber service',
    url: 'https://via.placeholder.com/64x64?text=Plumber',
    altText: 'Plumber Service Icon',
    type: 'icon',
    category: 'service',
    serviceId: 'serv-9', // Plumber
    width: 64,
    height: 64,
    createdAt: '2023-01-06T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z'
  },

  // Professional Avatars
  {
    id: 24,
    name: 'Rahul Sharma Avatar',
    description: 'Avatar for Rahul Sharma',
    url: 'https://via.placeholder.com/200x200?text=Rahul',
    altText: 'Rahul Sharma',
    type: 'avatar',
    category: 'professional',
    professionalId: 'prof-1',
    width: 200,
    height: 200,
    createdAt: '2023-01-07T00:00:00Z',
    updatedAt: '2023-01-07T00:00:00Z'
  },
  {
    id: 25,
    name: 'Priya Singh Avatar',
    description: 'Avatar for Priya Singh',
    url: 'https://via.placeholder.com/200x200?text=Priya',
    altText: 'Priya Singh',
    type: 'avatar',
    category: 'professional',
    professionalId: 'prof-2',
    width: 200,
    height: 200,
    createdAt: '2023-01-07T00:00:00Z',
    updatedAt: '2023-01-07T00:00:00Z'
  },
  {
    id: 26,
    name: 'Amit Kumar Avatar',
    description: 'Avatar for Amit Kumar',
    url: 'https://via.placeholder.com/200x200?text=Amit',
    altText: 'Amit Kumar',
    type: 'avatar',
    category: 'professional',
    professionalId: 'prof-3',
    width: 200,
    height: 200,
    createdAt: '2023-01-07T00:00:00Z',
    updatedAt: '2023-01-07T00:00:00Z'
  },
  {
    id: 27,
    name: 'Neha Patel Avatar',
    description: 'Avatar for Neha Patel',
    url: 'https://via.placeholder.com/200x200?text=Neha',
    altText: 'Neha Patel',
    type: 'avatar',
    category: 'professional',
    professionalId: 'prof-4',
    width: 200,
    height: 200,
    createdAt: '2023-01-07T00:00:00Z',
    updatedAt: '2023-01-07T00:00:00Z'
  },

  // Testimonial Avatars
  {
    id: 28,
    name: 'Ananya Gupta Avatar',
    description: 'Avatar for Ananya Gupta',
    url: 'https://via.placeholder.com/200x200?text=Ananya',
    altText: 'Ananya Gupta',
    type: 'avatar',
    category: 'testimonial',
    width: 200,
    height: 200,
    createdAt: '2023-01-08T00:00:00Z',
    updatedAt: '2023-01-08T00:00:00Z'
  },
  {
    id: 29,
    name: 'Vikram Malhotra Avatar',
    description: 'Avatar for Vikram Malhotra',
    url: 'https://via.placeholder.com/200x200?text=Vikram',
    altText: 'Vikram Malhotra',
    type: 'avatar',
    category: 'testimonial',
    width: 200,
    height: 200,
    createdAt: '2023-01-08T00:00:00Z',
    updatedAt: '2023-01-08T00:00:00Z'
  },
  {
    id: 30,
    name: 'Meera Reddy Avatar',
    description: 'Avatar for Meera Reddy',
    url: 'https://via.placeholder.com/200x200?text=Meera',
    altText: 'Meera Reddy',
    type: 'avatar',
    category: 'testimonial',
    width: 200,
    height: 200,
    createdAt: '2023-01-08T00:00:00Z',
    updatedAt: '2023-01-08T00:00:00Z'
  },
  {
    id: 31,
    name: 'Arjun Kapoor Avatar',
    description: 'Avatar for Arjun Kapoor',
    url: 'https://via.placeholder.com/200x200?text=Arjun',
    altText: 'Arjun Kapoor',
    type: 'avatar',
    category: 'testimonial',
    width: 200,
    height: 200,
    createdAt: '2023-01-08T00:00:00Z',
    updatedAt: '2023-01-08T00:00:00Z'
  },

  // Payment Methods Image
  {
    id: 32,
    name: 'Payment Methods',
    description: 'Payment methods accepted',
    url: 'https://via.placeholder.com/300x50?text=Payment+Methods',
    altText: 'Payment Methods',
    type: 'payment',
    category: 'footer',
    width: 300,
    height: 50,
    createdAt: '2023-01-09T00:00:00Z',
    updatedAt: '2023-01-09T00:00:00Z'
  },

  // SEO Images
  {
    id: 33,
    name: 'OG Image',
    description: 'Open Graph image for social sharing',
    url: 'https://via.placeholder.com/1200x630?text=DoDoServices',
    altText: 'DoDoServices - Home Services at Your Doorstep',
    type: 'banner',
    category: 'seo',
    width: 1200,
    height: 630,
    createdAt: '2023-01-10T00:00:00Z',
    updatedAt: '2023-01-10T00:00:00Z'
  },
  {
    id: 34,
    name: 'Twitter Image',
    description: 'Twitter image for social sharing',
    url: 'https://via.placeholder.com/1200x600?text=DoDoServices',
    altText: 'DoDoServices - Home Services at Your Doorstep',
    type: 'banner',
    category: 'seo',
    width: 1200,
    height: 600,
    createdAt: '2023-01-10T00:00:00Z',
    updatedAt: '2023-01-10T00:00:00Z'
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const imageApi = {
  // Get all images
  getAllImages: async () => {
    await delay(600);
    return { data: images };
  },

  // Get image by ID
  getImageById: async (id: number) => {
    await delay(400);
    const image = images.find(img => img.id === id);
    if (!image) {
      throw new Error('Image not found');
    }
    return { data: image };
  },

  // Get images by type
  getImagesByType: async (type: ImageAsset['type']) => {
    await delay(500);
    const filteredImages = images.filter(img => img.type === type);
    return { data: filteredImages };
  },

  // Get images by category
  getImagesByCategory: async (category: string) => {
    await delay(500);
    const filteredImages = images.filter(img => img.category === category);
    return { data: filteredImages };
  },

  // Get images by type and category
  getImagesByTypeAndCategory: async (type: ImageAsset['type'], category: string) => {
    await delay(500);
    const filteredImages = images.filter(img => img.type === type && img.category === category);
    return { data: filteredImages };
  },

  // Get images by service ID
  getImagesByServiceId: async (serviceId: string) => {
    await delay(500);
    const filteredImages = images.filter(img => img.serviceId === serviceId);
    return { data: filteredImages };
  },

  // Get images by category ID
  getImagesByCategoryId: async (categoryId: string) => {
    await delay(500);
    const filteredImages = images.filter(img => img.categoryId === categoryId);
    return { data: filteredImages };
  },

  // Get images by professional ID
  getImagesByProfessionalId: async (professionalId: string) => {
    await delay(500);
    const filteredImages = images.filter(img => img.professionalId === professionalId);
    return { data: filteredImages };
  },

  // Update image (mock implementation)
  updateImage: async (id: number, imageData: Partial<ImageAsset>) => {
    await delay(700);
    const imageIndex = images.findIndex(img => img.id === id);
    if (imageIndex === -1) {
      throw new Error('Image not found');
    }

    // Update image
    const updatedImage = {
      ...images[imageIndex],
      ...imageData,
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would update the database
    images[imageIndex] = updatedImage;

    return {
      success: true,
      message: 'Image updated successfully',
      data: updatedImage
    };
  }
};
