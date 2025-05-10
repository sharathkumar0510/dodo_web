'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { api, Booking, BookingStatus } from '@/lib/api/mockApi';
import BookingStatusBadge from '@/components/bookings/BookingStatusBadge';

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<BookingStatus | 'all'>('all');
  
  // Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        // Using a mock user ID of 1
        const response = await api.getUserBookings(1);
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch bookings');
        console.error('Error fetching bookings:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBookings();
  }, []);
  
  // Filter bookings
  const filterBookings = (status: BookingStatus | 'all') => {
    setActiveFilter(status);
    
    if (status === 'all') {
      setFilteredBookings(bookings);
    } else {
      setFilteredBookings(bookings.filter(booking => booking.status === status));
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      
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
        <>
          {/* Filters */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              <button
                onClick={() => filterBookings('all')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'all'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => filterBookings('pending')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'pending'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => filterBookings('confirmed')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'confirmed'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Confirmed
              </button>
              <button
                onClick={() => filterBookings('in_progress')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'in_progress'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => filterBookings('completed')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'completed'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => filterBookings('cancelled')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'cancelled'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Cancelled
              </button>
              <button
                onClick={() => filterBookings('rescheduled')}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === 'rescheduled'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Rescheduled
              </button>
            </div>
          </div>
          
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">No bookings found</h2>
              <p className="text-gray-600 mb-6">
                {activeFilter === 'all'
                  ? "You haven't made any bookings yet."
                  : `You don't have any ${activeFilter} bookings.`}
              </p>
              <Link
                href="/services"
                className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Browse Services
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold">{booking.serviceName}</h2>
                        <p className="text-gray-600 mt-1">{booking.serviceDescription}</p>
                        <div className="flex items-center mt-2 space-x-4">
                          <BookingStatusBadge status={booking.status} />
                          <span className="text-gray-600 text-sm">
                            Order ID: {booking.orderId}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-lg">
                          ₹{booking.totalAmount.toLocaleString()}
                        </div>
                        <Link
                          href={`/bookings/${booking.id}`}
                          className="inline-block mt-2 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50">
                    <div className="flex flex-col md:flex-row justify-between text-sm">
                      <div>
                        <span className="text-gray-600">Scheduled for:</span>{' '}
                        <span className="font-medium">
                          {formatDate(booking.scheduledDate)}, {booking.scheduledTime}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Booked on:</span>{' '}
                        <span className="font-medium">{formatDate(booking.bookingDate)}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Payment:</span>{' '}
                        <span className={`font-medium ${
                          booking.paymentStatus === 'paid' ? 'text-green-600' : 
                          booking.paymentStatus === 'refunded' ? 'text-blue-600' : 
                          'text-yellow-600'
                        }`}>
                          {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
