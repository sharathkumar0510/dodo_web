import Link from 'next/link';
import Image from 'next/image';
import { ServiceCategory } from '@/types';
import { placeholderIcons } from '@/utils/placeholderIcons';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export default function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  // Use placeholder icon if the actual icon is not available
  const iconSrc = category.icon && category.icon.startsWith('/')
    ? placeholderIcons[category.slug] || placeholderIcons['cleaning-pest-control']
    : category.icon;

  return (
    <Link
      href={`/services/${category.slug}`}
      className="block group"
    >
      <div className="bg-gray-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
        <div className="relative w-full aspect-square mb-3 bg-white rounded-lg flex items-center justify-center overflow-hidden">
          {iconSrc ? (
            <div className="relative w-16 h-16">
              <img
                src={iconSrc}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">
                {category.name.charAt(0)}
              </span>
            </div>
          )}

          {category.isNew && (
            <div className="absolute top-2 right-2 bg-black text-white text-xs font-medium px-2 py-0.5 rounded">
              NEW
            </div>
          )}
        </div>

        <h3 className="text-center font-medium text-sm md:text-base group-hover:text-black transition-colors">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
