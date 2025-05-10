import Link from 'next/link';
import Image from 'next/image';
import { ServiceCategory } from '@/types';
import { placeholderIcons } from '@/utils/placeholderIcons';
import DynamicImage from '@/components/common/DynamicImage';

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
          <div className="relative w-16 h-16">
            <DynamicImage
              type="thumbnail"
              category="service-category"
              width={64}
              height={64}
              className="w-full h-full object-contain"
              fallbackUrl={iconSrc || placeholderIcons['cleaning-pest-control']}
              fallbackAlt={category.name}
            />
          </div>

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
