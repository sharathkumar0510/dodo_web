'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { imageService } from '@/lib/services/imageService';
import { ImageAsset } from '@/lib/api/mockImageApi';

interface ImageContextType {
  images: ImageAsset[];
  isLoading: boolean;
  error: string | null;
  getImageById: (id: number) => ImageAsset | undefined;
  getImagesByType: (type: ImageAsset['type']) => ImageAsset[];
  getImagesByCategory: (category: string) => ImageAsset[];
  getImagesByTypeAndCategory: (type: ImageAsset['type'], category: string) => ImageAsset[];
  getImagesByServiceId: (serviceId: string) => ImageAsset[];
  getImagesByCategoryId: (categoryId: string) => ImageAsset[];
  getImagesByProfessionalId: (professionalId: string) => ImageAsset[];
  refreshImages: () => Promise<void>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchedImages = await imageService.getAllImages();
      setImages(fetchedImages);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Failed to load images');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const getImageById = (id: number) => {
    return images.find(img => img.id === id);
  };

  const getImagesByType = (type: ImageAsset['type']) => {
    return images.filter(img => img.type === type);
  };

  const getImagesByCategory = (category: string) => {
    return images.filter(img => img.category === category);
  };

  const getImagesByTypeAndCategory = (type: ImageAsset['type'], category: string) => {
    return images.filter(img => img.type === type && img.category === category);
  };

  const getImagesByServiceId = (serviceId: string) => {
    return images.filter(img => img.serviceId === serviceId);
  };

  const getImagesByCategoryId = (categoryId: string) => {
    return images.filter(img => img.categoryId === categoryId);
  };

  const getImagesByProfessionalId = (professionalId: string) => {
    return images.filter(img => img.professionalId === professionalId);
  };

  const refreshImages = async () => {
    // Clear cache and fetch fresh images
    imageService.clearCache();
    await fetchImages();
  };

  const value = {
    images,
    isLoading,
    error,
    getImageById,
    getImagesByType,
    getImagesByCategory,
    getImagesByTypeAndCategory,
    getImagesByServiceId,
    getImagesByCategoryId,
    getImagesByProfessionalId,
    refreshImages
  };

  return (
    <ImageContext.Provider value={value}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImages() {
  const context = useContext(ImageContext);

  if (context === undefined) {
    throw new Error('useImages must be used within an ImageProvider');
  }

  return context;
}
