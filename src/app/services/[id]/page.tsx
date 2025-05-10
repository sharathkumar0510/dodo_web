'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { api, SubService, Review } from '@/lib/api/mockApi';
import { useCart } from '@/context/CartContext';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = Number(params.id);
  const { addToCart, isLoading: isCartLoading } = useCart();

  const [service, setService] = useState<SubService | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);

  // Fetch service details and reviews
  useEffect(() => {
    const fetchServiceDetails = async () => {
      setIsLoading(true);
      try {
        // Fetch service details
        const serviceResponse = await api.getService(serviceId);
        setService(serviceResponse.data);

        // Fetch reviews for this service
        const reviewsResponse = await api.getServiceReviews(serviceId);
        setReviews(reviewsResponse.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch service details');
        console.error('Error fetching service details:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (serviceId) {
      fetchServiceDetails();
    }
  }, [serviceId]);

  const handleBookNow = async () => {
    if (!service) return;

    try {
      await addToCart(service.id);
      setBookingMessage(`Added ${service.name} to cart`);

      // Redirect to cart after a short delay
      setTimeout(() => {
        router.push('/cart');
      }, 1500);
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Error</h3>
          <p>{error || 'Service not found'}</p>
          <Link href="/services" className="mt-4 inline-block text-black hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {bookingMessage && (
        <div className="fixed top-20 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md z-50 animate-fade-in-out">
          <p>{bookingMessage}</p>
        </div>
      )}

      <div className="mb-6">
        <Link href="/services" className="text-black hover:underline">
          ← Back to Services
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold">{service.name}</h1>
          {service.rating && (
            <div className="flex items-center mt-2">
              <div className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-sm">
                ★ {service.rating}
              </div>
              {service.totalBookings && (
                <span className="text-gray-500 text-sm ml-2">
                  ({service.totalBookings.toLocaleString()} bookings)
                </span>
              )}
            </div>
          )}
          <p className="text-gray-600 mt-4">{service.description}</p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Service Details</h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg">{service.name}</h3>
                <div className="text-gray-600 text-sm mt-1">
                  Duration: {service.duration} mins
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg">
                  ₹{service.discountedPrice || service.price}
                </div>
                {service.discountedPrice && (
                  <div className="text-gray-500 line-through text-sm">
                    ₹{service.price}
                  </div>
                )}
                {service.discountedPrice && (
                  <div className="text-green-600 text-sm">
                    Save ₹{service.price - service.discountedPrice}
                  </div>
                )}
              </div>
            </div>

            <h4 className="font-medium mb-2">What's Included:</h4>
            <ul className="space-y-1 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleBookNow}
              disabled={isCartLoading}
              className={`w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors ${
                isCartLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isCartLoading ? 'Adding to Cart...' : 'Book Now'}
            </button>
          </div>
        </div>

        <div className="p-6 border-t">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{review.userName}</div>
                      <div className="text-yellow-500 mt-1">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {review.date}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No reviews yet for this service.</p>
          )}
        </div>
      </div>
    </div>
  );
}
