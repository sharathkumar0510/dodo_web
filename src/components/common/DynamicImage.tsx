'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { imageService } from '@/lib/services/imageService';
import { ImageAsset } from '@/lib/api/mockImageApi';

interface DynamicImageProps {
  // You can provide either imageId or type and category
  imageId?: number;
  type?: ImageAsset['type'];
  category?: string;
  fallbackUrl?: string;
  fallbackAlt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export default function DynamicImage({
  imageId,
  type,
  category,
  fallbackUrl = 'https://via.placeholder.com/300x300?text=Image+Not+Found',
  fallbackAlt = 'Image not found',
  className = '',
  width,
  height,
  priority = false,
  onLoad,
  onError
}: DynamicImageProps) {
  const [image, setImage] = useState<ImageAsset | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        let fetchedImage: ImageAsset | null = null;
        
        if (imageId) {
          // Fetch by ID
          fetchedImage = await imageService.getImageById(imageId);
        } else if (type && category) {
          // Fetch by type and category
          const images = await imageService.getImagesByTypeAndCategory(type, category);
          if (images.length > 0) {
            fetchedImage = images[0]; // Get the first matching image
          }
        } else if (type) {
          // Fetch by type only
          const images = await imageService.getImagesByType(type);
          if (images.length > 0) {
            fetchedImage = images[0]; // Get the first matching image
          }
        } else if (category) {
          // Fetch by category only
          const images = await imageService.getImagesByCategory(category);
          if (images.length > 0) {
            fetchedImage = images[0]; // Get the first matching image
          }
        }
        
        if (fetchedImage) {
          setImage(fetchedImage);
        } else {
          setError('Image not found');
        }
      } catch (err) {
        console.error('Error fetching image:', err);
        setError('Failed to load image');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchImage();
  }, [imageId, type, category]);
  
  const handleImageLoad = () => {
    if (onLoad) onLoad();
  };
  
  const handleImageError = () => {
    setError('Failed to load image');
    if (onError) onError();
  };
  
  // Use image dimensions if provided, otherwise use the ones from the API
  const imageWidth = width || image?.width || 300;
  const imageHeight = height || image?.height || 300;
  
  if (isLoading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width: imageWidth, height: imageHeight }}
      />
    );
  }
  
  if (error || !image) {
    return (
      <Image
        src={fallbackUrl}
        alt={fallbackAlt}
        width={imageWidth}
        height={imageHeight}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  }
  
  return (
    <Image
      src={image.url}
      alt={image.altText}
      width={imageWidth}
      height={imageHeight}
      className={className}
      priority={priority}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
}
