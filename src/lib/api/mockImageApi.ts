// Types for images and icons
export interface ImageAsset {
  id: number;
  name: string;
  description?: string;
  url: string;
  altText: string;
  type: 'banner' | 'thumbnail' | 'icon' | 'logo' | 'background';
  category?: string;
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
