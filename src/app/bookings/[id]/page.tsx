'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { api, Booking, AddOnService, BookingTimeSlot } from '@/lib/api/mockApi';
import BookingStatusBadge from '@/components/bookings/BookingStatusBadge';
import CancellationModal from '@/components/bookings/CancellationModal';
import RescheduleModal from '@/components/bookings/RescheduleModal';
import AddNotesModal from '@/components/bookings/AddNotesModal';
import AddOnsModal from '@/components/bookings/AddOnsModal';

export default function BookingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const bookingId = Number(params.id);
  
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Modal states
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showAddOnsModal, setShowAddOnsModal] = useState(false);
  
  // Action states
  const [isProcessing, setIsProcessing] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Fetch booking details
  useEffect(() => {
    const fetchBookingDetails = async () => {
      setIsLoading(true);
      try {
        const response = await api.getBooking(bookingId);
        setBooking(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch booking details');
        console.error('Error fetching booking details:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (bookingId) {
      fetchBookingDetails();
    }
  }, [bookingId]);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Format date and time
  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Handle booking cancellation
  const handleCancelBooking = async (reason: string) => {
    if (!booking) return;
    
    setIsProcessing(true);
    setActionMessage(null);
    
    try {
      const response = await api.cancelBooking(booking.id, reason);
      setBooking(response.data);
      setShowCancelModal(false);
      setActionMessage({
        type: 'success',
        text: 'Booking cancelled successfully. A refund has been initiated.'
      });
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to cancel booking'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Handle booking rescheduling
  const handleRescheduleBooking = async (date: string, time: string) => {
    if (!booking) return;
    
    setIsProcessing(true);
    setActionMessage(null);
    
    try {
      const response = await api.rescheduleBooking(booking.id, date, time);
      setBooking(response.data);
      setShowRescheduleModal(false);
      setActionMessage({
        type: 'success',
        text: 'Booking rescheduled successfully.'
      });
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to reschedule booking'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Handle adding notes
  const handleAddNotes = async (notes: string) => {
    if (!booking) return;
    
    setIsProcessing(true);
    setActionMessage(null);
    
    try {
      const response = await api.addBookingNotes(booking.id, notes);
      setBooking(response.data);
      setShowNotesModal(false);
      setActionMessage({
        type: 'success',
        text: 'Notes added successfully.'
      });
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to add notes'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Handle adding add-on services
  const handleAddAddOns = async (addOnIds: number[]) => {
    if (!booking) return;
    
    setIsProcessing(true);
    setActionMessage(null);
    
    try {
      const response = await api.addBookingAddOns(booking.id, addOnIds);
      setBooking(response.data);
      setShowAddOnsModal(false);
      setActionMessage({
        type: 'success',
        text: 'Add-on services added successfully.'
      });
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to add add-on services'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Check if booking can be cancelled
  const canCancel = booking && !['completed', 'cancelled', 'in_progress'].includes(booking.status);
  
  // Check if booking can be rescheduled
  const canReschedule = booking && !['completed', 'cancelled', 'in_progress'].includes(booking.status);
  
  // Check if notes can be added
  const canAddNotes = booking && !['completed', 'cancelled'].includes(booking.status);
  
  // Check if add-ons can be added
  const canAddAddOns = booking && !['completed', 'cancelled', 'in_progress'].includes(booking.status);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </div>
    );
  }
  
  if (error || !booking) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <h3 className="font-semibold mb-1">Error</h3>
          <p>{error || 'Booking not found'}</p>
          <Link href="/bookings" className="mt-4 inline-block text-black hover:underline">
            ← Back to My Bookings
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/bookings" className="text-black hover:underline">
          ← Back to My Bookings
        </Link>
      </div>
      
      {/* Action message */}
      {actionMessage && (
        <div className={`mb-6 p-4 rounded-lg ${
          actionMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          <p>{actionMessage.text}</p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Booking header */}
        <div className="p-6 border-b">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl font-bold">{booking.serviceName}</h1>
              <p className="text-gray-600 mt-1">{booking.serviceDescription}</p>
              <div className="flex items-center mt-2 space-x-4">
                <BookingStatusBadge status={booking.status} />
                <span className="text-gray-600">
                  Order ID: {booking.orderId}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-xl">
                ₹{booking.totalAmount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Quantity: {booking.quantity}
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <span className="text-gray-600">Scheduled Date:</span>{' '}
                <span className="font-medium">{formatDate(booking.scheduledDate)}</span>
              </div>
              <div>
                <span className="text-gray-600">Scheduled Time:</span>{' '}
                <span className="font-medium">{booking.scheduledTime}</span>
              </div>
              <div>
                <span className="text-gray-600">Booking Date:</span>{' '}
                <span className="font-medium">{formatDateTime(booking.bookingDate)}</span>
              </div>
              <div>
                <span className="text-gray-600">Payment Method:</span>{' '}
                <span className="font-medium">{booking.paymentMethod}</span>
              </div>
              <div>
                <span className="text-gray-600">Payment Status:</span>{' '}
                <span className={`font-medium ${
                  booking.paymentStatus === 'paid' ? 'text-green-600' : 
                  booking.paymentStatus === 'refunded' ? 'text-blue-600' : 
                  'text-yellow-600'
                }`}>
                  {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                </span>
              </div>
              {booking.refundAmount && (
                <div>
                  <span className="text-gray-600">Refund Amount:</span>{' '}
                  <span className="font-medium text-blue-600">₹{booking.refundAmount.toLocaleString()}</span>
                </div>
              )}
              {booking.refundDate && (
                <div>
                  <span className="text-gray-600">Refund Date:</span>{' '}
                  <span className="font-medium">{formatDateTime(booking.refundDate)}</span>
                </div>
              )}
              {booking.cancellationReason && (
                <div>
                  <span className="text-gray-600">Cancellation Reason:</span>{' '}
                  <span className="font-medium">{booking.cancellationReason}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Right column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">{booking.address.fullName}</p>
              <p>{booking.address.addressLine1}</p>
              {booking.address.addressLine2 && <p>{booking.address.addressLine2}</p>}
              <p>{booking.address.city}, {booking.address.state} {booking.address.pincode}</p>
              <p>Phone: {booking.address.phoneNumber}</p>
              <p className="mt-1 inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                {booking.address.addressType.charAt(0).toUpperCase() + booking.address.addressType.slice(1)}
              </p>
            </div>
          </div>
        </div>
        
        {/* Notes section */}
        <div className="p-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Notes</h2>
            {canAddNotes && (
              <button
                onClick={() => setShowNotesModal(true)}
                className="text-black hover:underline text-sm"
                disabled={isProcessing}
              >
                {booking.notes ? 'Edit Notes' : 'Add Notes'}
              </button>
            )}
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            {booking.notes ? (
              <p>{booking.notes}</p>
            ) : (
              <p className="text-gray-500 italic">No notes added yet.</p>
            )}
          </div>
        </div>
        
        {/* Add-ons section */}
        <div className="p-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Add-on Services</h2>
            {canAddAddOns && (
              <button
                onClick={() => setShowAddOnsModal(true)}
                className="text-black hover:underline text-sm"
                disabled={isProcessing}
              >
                Add More Services
              </button>
            )}
          </div>
          {booking.addOns && booking.addOns.length > 0 ? (
            <div className="space-y-3">
              {booking.addOns.map((addon) => (
                <div key={addon.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{addon.name}</h3>
                    <p className="text-sm text-gray-600">{addon.description}</p>
                    {addon.duration > 0 && (
                      <p className="text-sm text-gray-600">Duration: {addon.duration} mins</p>
                    )}
                  </div>
                  <div className="font-semibold">
                    ₹{addon.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No add-on services added.</p>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="p-6 border-t">
          <div className="flex flex-wrap gap-4">
            {canReschedule && (
              <button
                onClick={() => setShowRescheduleModal(true)}
                className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
                disabled={isProcessing}
              >
                Reschedule
              </button>
            )}
            {canCancel && (
              <button
                onClick={() => setShowCancelModal(true)}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
                disabled={isProcessing}
              >
                Cancel Booking
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Modals */}
      {showCancelModal && (
        <CancellationModal
          onCancel={() => setShowCancelModal(false)}
          onConfirm={handleCancelBooking}
          isProcessing={isProcessing}
        />
      )}
      
      {showRescheduleModal && (
        <RescheduleModal
          onCancel={() => setShowRescheduleModal(false)}
          onConfirm={handleRescheduleBooking}
          isProcessing={isProcessing}
          currentDate={booking.scheduledDate}
          currentTime={booking.scheduledTime}
        />
      )}
      
      {showNotesModal && (
        <AddNotesModal
          onCancel={() => setShowNotesModal(false)}
          onConfirm={handleAddNotes}
          isProcessing={isProcessing}
          currentNotes={booking.notes || ''}
        />
      )}
      
      {showAddOnsModal && (
        <AddOnsModal
          onCancel={() => setShowAddOnsModal(false)}
          onConfirm={handleAddAddOns}
          isProcessing={isProcessing}
          currentAddOns={booking.addOns || []}
        />
      )}
    </div>
  );
}
