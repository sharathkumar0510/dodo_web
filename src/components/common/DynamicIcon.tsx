'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { imageService } from '@/lib/services/imageService';
import { ImageAsset } from '@/lib/api/mockImageApi';

interface DynamicIconProps {
  // You can provide either imageId or category
  iconId?: number;
  category?: string;
  fallbackIcon?: React.ReactNode;
  className?: string;
  size?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export default function DynamicIcon({
  iconId,
  category,
  fallbackIcon,
  className = '',
  size = 24,
  onLoad,
  onError
}: DynamicIconProps) {
  const [icon, setIcon] = useState<ImageAsset | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchIcon = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        let fetchedIcon: ImageAsset | null = null;
        
        if (iconId) {
          // Fetch by ID
          fetchedIcon = await imageService.getImageById(iconId);
          if (fetchedIcon && fetchedIcon.type !== 'icon') {
            setError('Asset is not an icon');
            fetchedIcon = null;
          }
        } else if (category) {
          // Fetch by category
          const icons = await imageService.getImagesByTypeAndCategory('icon', category);
          if (icons.length > 0) {
            fetchedIcon = icons[0]; // Get the first matching icon
          }
        } else {
          // Fetch any icon
          const icons = await imageService.getImagesByType('icon');
          if (icons.length > 0) {
            fetchedIcon = icons[0]; // Get the first icon
          }
        }
        
        if (fetchedIcon) {
          setIcon(fetchedIcon);
        } else {
          setError('Icon not found');
        }
      } catch (err) {
        console.error('Error fetching icon:', err);
        setError('Failed to load icon');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchIcon();
  }, [iconId, category]);
  
  const handleIconLoad = () => {
    if (onLoad) onLoad();
  };
  
  const handleIconError = () => {
    setError('Failed to load icon');
    if (onError) onError();
  };
  
  if (isLoading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse rounded-full ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  
  if (error || !icon) {
    if (fallbackIcon) {
      return <>{fallbackIcon}</>;
    }
    
    // Default fallback icon (simple placeholder)
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center rounded-full ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-xs">?</span>
      </div>
    );
  }
  
  return (
    <Image
      src={icon.url}
      alt={icon.altText}
      width={size}
      height={size}
      className={className}
      onLoad={handleIconLoad}
      onError={handleIconError}
    />
  );
}
