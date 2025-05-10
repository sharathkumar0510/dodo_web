import { Metadata } from 'next';
import { ServiceCategory, Service, ServicePackage } from '@/types';

// Base metadata for the website
export const baseMetadata: Metadata = {
  title: {
    default: 'DoDoServices - Home Services at Your Doorstep',
    template: '%s | DoDoServices'
  },
  description: 'Book trusted home services including cleaning, repairs, salon, and more at your doorstep. Professional service providers, transparent pricing, and hassle-free booking.',
  keywords: ['home services', 'cleaning services', 'repair services', 'salon services', 'professional services', 'doorstep services'],
  authors: [{ name: 'DoDoServices' }],
  creator: 'DoDoServices',
  publisher: 'DoDoServices',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://dodoservices.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'DoDoServices',
    title: 'DoDoServices - Home Services at Your Doorstep',
    description: 'Book trusted home services including cleaning, repairs, salon, and more at your doorstep.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoDoServices - Home Services at Your Doorstep',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DoDoServices - Home Services at Your Doorstep',
    description: 'Book trusted home services including cleaning, repairs, salon, and more at your doorstep.',
    images: ['/images/twitter-image.jpg'],
    creator: '@dodoservices',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

// Generate metadata for service category pages
export const generateCategoryMetadata = (category: ServiceCategory): Metadata => {
  const title = `${category.name} Services at Your Doorstep`;
  const description = `Book professional ${category.name.toLowerCase()} services at your doorstep. ${category.description}`;
  
  return {
    title,
    description,
    keywords: [category.name.toLowerCase(), 'services', 'professional', 'doorstep', 'booking', ...category.services.map(service => service.name.toLowerCase())],
    alternates: {
      canonical: `/services/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${category.slug}`,
      images: [
        {
          url: `/images/categories/${category.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [`/images/categories/${category.slug}.jpg`],
    },
  };
};

// Generate metadata for service pages
export const generateServiceMetadata = (service: Service, category: ServiceCategory): Metadata => {
  const title = `${service.name} Services - Professional ${category.name}`;
  const description = `Book professional ${service.name.toLowerCase()} services at your doorstep. ${service.description}. Trusted professionals, transparent pricing, and hassle-free booking.`;
  
  return {
    title,
    description,
    keywords: [service.name.toLowerCase(), category.name.toLowerCase(), 'services', 'professional', 'doorstep', 'booking'],
    alternates: {
      canonical: `/services/${category.slug}/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${category.slug}/${service.slug}`,
      images: [
        {
          url: `/images/services/${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [`/images/services/${service.slug}.jpg`],
    },
  };
};

// Generate JSON-LD structured data for service
export const generateServiceJsonLd = (service: Service, category: ServiceCategory) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'DoDoServices',
      logo: 'https://dodoservices.com/logo.png',
    },
    serviceType: category.name,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} Packages`,
      itemListElement: service.packages.map((pkg, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: pkg.name,
          description: pkg.description,
        },
        price: pkg.discountedPrice || pkg.price,
        priceCurrency: 'INR',
        eligibleRegion: {
          '@type': 'Country',
          name: 'India',
        },
        position: index + 1,
      })),
    },
    aggregateRating: service.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: service.rating,
          ratingCount: service.totalBookings,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  };
};
