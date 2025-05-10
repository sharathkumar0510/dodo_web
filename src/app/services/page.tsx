'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api, ServiceCategory, SubService } from '@/lib/api/mockApi';
import { useCart } from '@/context/CartContext';

export default function ServicesPage() {
  const router = useRouter();
  const { addToCart, isLoading: isCartLoading } = useCart();
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [services, setServices] = useState<Record<number, SubService[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch service categories
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await api.getServiceCategories();
        setCategories(response.data);

        // Fetch services for each category
        const servicesData: Record<number, SubService[]> = {};
        for (const category of response.data) {
          const servicesResponse = await api.getServicesByCategory(category.id);
          servicesData[category.id] = servicesResponse.data;
        }
        setServices(servicesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch services');
        console.error('Error fetching services:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleBookNow = async (serviceId: number, serviceName: string) => {
    try {
      await addToCart(serviceId);
      setBookingMessage(`Added ${serviceName} to cart`);

      // Redirect to cart after a short delay
      setTimeout(() => {
        router.push('/cart');
      }, 1500);
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {bookingMessage && (
        <div className="fixed top-20 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md z-50 animate-fade-in-out">
          <p>{bookingMessage}</p>
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-gray-600 mb-8">
        Browse through our wide range of professional services designed to make your life easier.
      </p>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Error</h3>
          <p>{error}</p>
        </div>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Available Services</h3>
                {services[category.id] && services[category.id].length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[category.id].map((service) => (
                      <div key={service.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{service.name}</h4>
                          <span className="text-gray-700">₹{service.discountedPrice || service.price}</span>
                        </div>
                        {service.discountedPrice && (
                          <div className="text-sm text-gray-500 line-through text-right">
                            ₹{service.price}
                          </div>
                        )}
                        <div className="mt-4 flex justify-between items-center">
                          <Link
                            href={`/services/${service.id}`}
                            className="text-black font-medium hover:underline"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleBookNow(service.id, service.name)}
                            disabled={isCartLoading}
                            className={`bg-black text-white px-4 py-1 rounded-md text-sm hover:bg-gray-800 transition-colors ${
                              isCartLoading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                          >
                            {isCartLoading ? 'Adding...' : 'Book Now'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No services available in this category.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
