import { ServiceCategory } from '@/types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cat-1',
    name: 'Women\'s Salon & Spa',
    slug: 'womens-salon-spa',
    icon: '/icons/women-salon.svg',
    description: 'Professional salon and spa services for women at your doorstep',
    services: [
      {
        id: 'serv-1',
        name: 'Facial',
        slug: 'facial',
        icon: '/icons/facial.svg',
        description: 'Rejuvenating facials by trained professionals',
        categoryId: 'cat-1',
        rating: 4.8,
        totalBookings: 5000,
        packages: [
          {
            id: 'pkg-1',
            name: 'Basic Facial',
            description: 'Cleansing, exfoliation, and hydration',
            price: 999,
            discountedPrice: 799,
            duration: 60,
            serviceId: 'serv-1',
            features: ['Deep cleansing', 'Gentle exfoliation', 'Hydrating mask'],
          },
          {
            id: 'pkg-2',
            name: 'Premium Facial',
            description: 'Advanced facial with anti-aging benefits',
            price: 1499,
            discountedPrice: 1299,
            duration: 90,
            serviceId: 'serv-1',
            features: ['Deep cleansing', 'Advanced exfoliation', 'Anti-aging serum', 'Collagen mask', 'Face massage'],
            isPopular: true,
          }
        ]
      },
      {
        id: 'serv-2',
        name: 'Waxing',
        slug: 'waxing',
        icon: '/icons/waxing.svg',
        description: 'Smooth and long-lasting hair removal services',
        categoryId: 'cat-1',
        rating: 4.7,
        totalBookings: 8000,
        packages: [
          {
            id: 'pkg-3',
            name: 'Full Body Waxing',
            description: 'Complete body waxing with premium wax',
            price: 1999,
            discountedPrice: 1699,
            duration: 120,
            serviceId: 'serv-2',
            features: ['Arms', 'Legs', 'Underarms', 'Stomach', 'Back'],
            isPopular: true,
          },
          {
            id: 'pkg-4',
            name: 'Basic Waxing',
            description: 'Arms and legs waxing',
            price: 999,
            discountedPrice: 799,
            duration: 60,
            serviceId: 'serv-2',
            features: ['Arms', 'Legs'],
          }
        ]
      }
    ]
  },
  {
    id: 'cat-2',
    name: 'Men\'s Salon & Massage',
    slug: 'mens-salon-massage',
    icon: '/icons/men-salon.svg',
    description: 'Grooming and relaxation services for men',
    services: [
      {
        id: 'serv-3',
        name: 'Haircut & Styling',
        slug: 'haircut-styling',
        icon: '/icons/haircut.svg',
        description: 'Professional haircuts and styling for men',
        categoryId: 'cat-2',
        rating: 4.6,
        totalBookings: 10000,
        packages: [
          {
            id: 'pkg-5',
            name: 'Basic Haircut',
            description: 'Simple haircut with basic styling',
            price: 299,
            discountedPrice: 249,
            duration: 30,
            serviceId: 'serv-3',
            features: ['Haircut', 'Basic styling', 'Wash'],
          },
          {
            id: 'pkg-6',
            name: 'Premium Haircut & Grooming',
            description: 'Complete grooming package for men',
            price: 599,
            discountedPrice: 499,
            duration: 60,
            serviceId: 'serv-3',
            features: ['Haircut', 'Advanced styling', 'Beard trim', 'Face clean-up', 'Head massage'],
            isPopular: true,
          }
        ]
      },
      {
        id: 'serv-4',
        name: 'Massage',
        slug: 'massage',
        icon: '/icons/massage.svg',
        description: 'Relaxing massage services by trained professionals',
        categoryId: 'cat-2',
        rating: 4.9,
        totalBookings: 7000,
        packages: [
          {
            id: 'pkg-7',
            name: 'Relaxation Massage',
            description: '60-minute full body massage',
            price: 999,
            discountedPrice: 799,
            duration: 60,
            serviceId: 'serv-4',
            features: ['Full body massage', 'Relaxation techniques', 'Stress relief'],
          },
          {
            id: 'pkg-8',
            name: 'Deep Tissue Massage',
            description: '90-minute therapeutic massage',
            price: 1499,
            discountedPrice: 1299,
            duration: 90,
            serviceId: 'serv-4',
            features: ['Deep tissue techniques', 'Muscle pain relief', 'Improved circulation', 'Stress relief'],
            isPopular: true,
          }
        ]
      }
    ]
  },
  {
    id: 'cat-3',
    name: 'AC & Appliance Repair',
    slug: 'ac-appliance-repair',
    icon: '/icons/ac-repair.svg',
    description: 'Professional repair services for home appliances',
    services: [
      {
        id: 'serv-5',
        name: 'AC Service & Repair',
        slug: 'ac-service-repair',
        icon: '/icons/ac.svg',
        description: 'Professional AC servicing and repair',
        categoryId: 'cat-3',
        rating: 4.7,
        totalBookings: 15000,
        packages: [
          {
            id: 'pkg-9',
            name: 'AC Service',
            description: 'Regular maintenance and cleaning',
            price: 599,
            discountedPrice: 499,
            duration: 60,
            serviceId: 'serv-5',
            features: ['Filter cleaning', 'Gas check', 'Performance check', 'Basic cleaning'],
          },
          {
            id: 'pkg-10',
            name: 'AC Deep Clean',
            description: 'Complete AC servicing and deep cleaning',
            price: 999,
            discountedPrice: 799,
            duration: 90,
            serviceId: 'serv-5',
            features: ['Deep cleaning', 'Filter cleaning', 'Gas refill', 'Performance optimization', 'Sanitization'],
            isPopular: true,
          }
        ]
      }
    ]
  },
  {
    id: 'cat-4',
    name: 'Cleaning & Pest Control',
    slug: 'cleaning-pest-control',
    icon: '/icons/cleaning.svg',
    description: 'Professional cleaning and pest control services',
    services: [
      {
        id: 'serv-6',
        name: 'Bathroom Cleaning',
        slug: 'bathroom-cleaning',
        icon: '/icons/bathroom.svg',
        description: 'Professional bathroom deep cleaning services',
        categoryId: 'cat-4',
        rating: 4.8,
        totalBookings: 12000,
        packages: [
          {
            id: 'pkg-11',
            name: 'Classic Cleaning (2 bathrooms)',
            description: 'Standard bathroom cleaning service',
            price: 599,
            discountedPrice: 499,
            duration: 120,
            serviceId: 'serv-6',
            features: ['Floor cleaning', 'Toilet cleaning', 'Sink cleaning', 'Mirror cleaning', 'Basic sanitization'],
          },
          {
            id: 'pkg-12',
            name: 'Intensive Cleaning (2 bathrooms)',
            description: 'Deep cleaning with stain removal',
            price: 999,
            discountedPrice: 799,
            duration: 180,
            serviceId: 'serv-6',
            features: ['Deep floor cleaning', 'Toilet deep cleaning', 'Sink & faucet polishing', 'Mirror cleaning', 'Advanced sanitization', 'Stain removal', 'Scrub machine cleaning'],
            isPopular: true,
          }
        ]
      },
      {
        id: 'serv-7',
        name: 'Pest Control',
        slug: 'pest-control',
        icon: '/icons/pest.svg',
        description: 'Effective pest control services for your home',
        categoryId: 'cat-4',
        rating: 4.7,
        totalBookings: 8000,
        packages: [
          {
            id: 'pkg-13',
            name: 'General Pest Control',
            description: 'Treatment for cockroaches, ants, and spiders',
            price: 999,
            discountedPrice: 799,
            duration: 60,
            serviceId: 'serv-7',
            features: ['Cockroach treatment', 'Ant treatment', 'Spider treatment', 'Safe chemicals', '30-day warranty'],
          },
          {
            id: 'pkg-14',
            name: 'Complete Pest Control',
            description: 'Comprehensive pest control for all common pests',
            price: 1999,
            discountedPrice: 1699,
            duration: 120,
            serviceId: 'serv-7',
            features: ['Cockroach treatment', 'Ant treatment', 'Spider treatment', 'Bed bug treatment', 'Rodent treatment', 'Safe chemicals', '90-day warranty'],
            isPopular: true,
          }
        ]
      }
    ]
  },
  {
    id: 'cat-5',
    name: 'Electrician, Plumber & Carpenter',
    slug: 'electrician-plumber-carpenter',
    icon: '/icons/electrician.svg',
    description: 'Professional home repair and maintenance services',
    isNew: true,
    services: [
      {
        id: 'serv-8',
        name: 'Electrician',
        slug: 'electrician',
        icon: '/icons/electrician-service.svg',
        description: 'Professional electrical repair and installation services',
        categoryId: 'cat-5',
        rating: 4.6,
        totalBookings: 9000,
        packages: [
          {
            id: 'pkg-15',
            name: 'Minor Repairs',
            description: 'Quick fixes for common electrical issues',
            price: 299,
            discountedPrice: 249,
            duration: 60,
            serviceId: 'serv-8',
            features: ['Switch/socket repair', 'Fan repair', 'Light fixture repair', '30-day warranty'],
          },
          {
            id: 'pkg-16',
            name: 'Major Installation',
            description: 'Installation of major electrical appliances',
            price: 799,
            discountedPrice: 699,
            duration: 120,
            serviceId: 'serv-8',
            features: ['AC installation', 'Geyser installation', 'Chandelier installation', 'Wiring work', '90-day warranty'],
            isPopular: true,
          }
        ]
      },
      {
        id: 'serv-9',
        name: 'Plumber',
        slug: 'plumber',
        icon: '/icons/plumber.svg',
        description: 'Professional plumbing services for your home',
        categoryId: 'cat-5',
        rating: 4.7,
        totalBookings: 8500,
        packages: [
          {
            id: 'pkg-17',
            name: 'Basic Plumbing',
            description: 'Quick fixes for common plumbing issues',
            price: 399,
            discountedPrice: 349,
            duration: 60,
            serviceId: 'serv-9',
            features: ['Tap repair', 'Flush repair', 'Minor leakage fix', '30-day warranty'],
          },
          {
            id: 'pkg-18',
            name: 'Advanced Plumbing',
            description: 'Comprehensive plumbing solutions',
            price: 899,
            discountedPrice: 799,
            duration: 120,
            serviceId: 'serv-9',
            features: ['Tap installation', 'Toilet installation', 'Pipe installation', 'Drainage cleaning', '90-day warranty'],
            isPopular: true,
          }
        ]
      }
    ]
  }
];

export const getAllServiceCategories = () => {
  return serviceCategories;
};

export const getServiceCategoryBySlug = (slug: string) => {
  return serviceCategories.find(category => category.slug === slug);
};

export const getServiceBySlug = (slug: string) => {
  for (const category of serviceCategories) {
    const service = category.services.find(service => service.slug === slug);
    if (service) {
      return service;
    }
  }
  return null;
};

export const getPackageById = (id: string) => {
  for (const category of serviceCategories) {
    for (const service of category.services) {
      const pkg = service.packages.find(pkg => pkg.id === id);
      if (pkg) {
        return pkg;
      }
    }
  }
  return null;
};
