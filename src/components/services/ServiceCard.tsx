import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/types';
import { Star } from 'lucide-react';
import { placeholderIcons } from '@/utils/placeholderIcons';

interface ServiceCardProps {
  service: Service;
  categorySlug: string;
}

export default function ServiceCard({ service, categorySlug }: ServiceCardProps) {
  // Use placeholder icon if the actual icon is not available
  const iconSrc = service.icon && service.icon.startsWith('/')
    ? placeholderIcons[service.slug] || placeholderIcons['bathroom-cleaning']
    : service.icon;

  return (
    <Link
      href={`/services/${categorySlug}/${service.slug}`}
      className="block group"
    >
      <div className="bg-white rounded-lg border transition-all duration-300 hover:shadow-md overflow-hidden">
        <div className="relative w-full aspect-video bg-gray-100">
          {iconSrc ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={iconSrc}
                alt={service.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-2xl font-bold text-gray-400">
                {service.name.charAt(0)}
              </span>
            </div>
          )}

          {service.isNew && (
            <div className="absolute top-2 right-2 bg-black text-white text-xs font-medium px-2 py-0.5 rounded">
              NEW
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-base md:text-lg group-hover:text-black transition-colors">
            {service.name}
          </h3>

          {service.rating && (
            <div className="flex items-center mt-2">
              <div className="flex items-center bg-green-50 text-green-700 px-2 py-0.5 rounded text-sm">
                <Star size={14} className="fill-green-700 text-green-700 mr-1" />
                <span>{service.rating}</span>
              </div>
              {service.totalBookings && (
                <span className="text-gray-500 text-sm ml-2">
                  ({service.totalBookings.toLocaleString()} bookings)
                </span>
              )}
            </div>
          )}

          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {service.description}
          </p>

          {service.packages && service.packages.length > 0 && (
            <div className="mt-3">
              <div className="text-sm text-gray-500">
                Starts at ₹{Math.min(...service.packages.map(pkg => pkg.discountedPrice || pkg.price))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
