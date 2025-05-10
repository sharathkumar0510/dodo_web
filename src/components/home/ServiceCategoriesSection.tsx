import { ServiceCategory } from '@/types';
import ServiceCategoryCard from '@/components/services/ServiceCategoryCard';

interface ServiceCategoriesSectionProps {
  categories: ServiceCategory[];
}

export default function ServiceCategoriesSection({ categories }: ServiceCategoriesSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">What are you looking for?</h2>
        <p className="text-gray-600 mb-8">Browse through our professional services</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
