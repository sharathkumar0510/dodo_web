import { MetadataRoute } from 'next';
import { getAllServiceCategories } from '@/lib/mock-data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dodoservices.com';
  const serviceCategories = getAllServiceCategories();
  
  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
  
  // Service category routes
  const categoryRoutes = serviceCategories.map((category) => ({
    url: `${baseUrl}/services/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  // Service routes
  const serviceRoutes = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      url: `${baseUrl}/services/${category.slug}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );
  
  return [...routes, ...categoryRoutes, ...serviceRoutes];
}
