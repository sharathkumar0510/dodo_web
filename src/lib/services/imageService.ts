import { imageApi, ImageAsset } from '../api/mockImageApi';

// Cache for images to avoid unnecessary API calls
const imageCache: Record<string, {
  data: ImageAsset | ImageAsset[];
  timestamp: number;
}> = {};

// Cache expiration time (5 minutes)
const CACHE_EXPIRATION = 5 * 60 * 1000;

// Check if cache is valid
const isCacheValid = (key: string): boolean => {
  if (!imageCache[key]) return false;
  
  const now = Date.now();
  return now - imageCache[key].timestamp < CACHE_EXPIRATION;
};

// Image service
export const imageService = {
  // Get all images
  getAllImages: async (): Promise<ImageAsset[]> => {
    const cacheKey = 'all-images';
    
    if (isCacheValid(cacheKey)) {
      return imageCache[cacheKey].data as ImageAsset[];
    }
    
    try {
      const response = await imageApi.getAllImages();
      
      // Update cache
      imageCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      return response.data;
    } catch (error) {
      console.error('Error fetching all images:', error);
      return [];
    }
  },
  
  // Get image by ID
  getImageById: async (id: number): Promise<ImageAsset | null> => {
    const cacheKey = `image-${id}`;
    
    if (isCacheValid(cacheKey)) {
      return imageCache[cacheKey].data as ImageAsset;
    }
    
    try {
      const response = await imageApi.getImageById(id);
      
      // Update cache
      imageCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching image with ID ${id}:`, error);
      return null;
    }
  },
  
  // Get images by type
  getImagesByType: async (type: ImageAsset['type']): Promise<ImageAsset[]> => {
    const cacheKey = `images-type-${type}`;
    
    if (isCacheValid(cacheKey)) {
      return imageCache[cacheKey].data as ImageAsset[];
    }
    
    try {
      const response = await imageApi.getImagesByType(type);
      
      // Update cache
      imageCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching images of type ${type}:`, error);
      return [];
    }
  },
  
  // Get images by category
  getImagesByCategory: async (category: string): Promise<ImageAsset[]> => {
    const cacheKey = `images-category-${category}`;
    
    if (isCacheValid(cacheKey)) {
      return imageCache[cacheKey].data as ImageAsset[];
    }
    
    try {
      const response = await imageApi.getImagesByCategory(category);
      
      // Update cache
      imageCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching images of category ${category}:`, error);
      return [];
    }
  },
  
  // Get images by type and category
  getImagesByTypeAndCategory: async (type: ImageAsset['type'], category: string): Promise<ImageAsset[]> => {
    const cacheKey = `images-type-${type}-category-${category}`;
    
    if (isCacheValid(cacheKey)) {
      return imageCache[cacheKey].data as ImageAsset[];
    }
    
    try {
      const response = await imageApi.getImagesByTypeAndCategory(type, category);
      
      // Update cache
      imageCache[cacheKey] = {
        data: response.data,
        timestamp: Date.now()
      };
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching images of type ${type} and category ${category}:`, error);
      return [];
    }
  },
  
  // Clear cache
  clearCache: () => {
    Object.keys(imageCache).forEach(key => {
      delete imageCache[key];
    });
  }
};
