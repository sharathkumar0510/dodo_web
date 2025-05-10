'use client';

import { useState, useEffect } from 'react';
import { api, BookingTimeSlot } from '@/lib/api/mockApi';

interface RescheduleModalProps {
  onCancel: () => void;
  onConfirm: (date: string, time: string) => void;
  isProcessing: boolean;
  currentDate: string;
  currentTime: string;
}

export default function RescheduleModal({ 
  onCancel, 
  onConfirm, 
  isProcessing,
  currentDate,
  currentTime
}: RescheduleModalProps) {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState(currentTime);
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<BookingTimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [error, setError] = useState('');
  
  // Generate dates for the next 7 days
  useEffect(() => {
    const generateDates = () => {
      const dates: string[] = [];
      const today = new Date();
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
      }
      
      return dates;
    };
    
    setAvailableDates(generateDates());
  }, []);
  
  // Fetch available time slots when date changes
  useEffect(() => {
    const fetchTimeSlots = async () => {
      setIsLoadingSlots(true);
      try {
        const response = await api.getAvailableTimeSlots(selectedDate);
        setAvailableTimeSlots(response.data);
        
        // If there are available slots and current selection is not available, select the first available slot
        if (response.data.length > 0) {
          const timeExists = response.data.some(slot => slot.startTime === selectedTime);
          if (!timeExists) {
            setSelectedTime(response.data[0].startTime);
          }
        } else {
          setSelectedTime('');
        }
      } catch (err) {
        console.error('Error fetching time slots:', err);
        setAvailableTimeSlots([]);
        setSelectedTime('');
      } finally {
        setIsLoadingSlots(false);
      }
    };
    
    if (selectedDate) {
      fetchTimeSlots();
    }
  }, [selectedDate, selectedTime]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      setError('Please select a date');
      return;
    }
    
    if (!selectedTime) {
      setError('Please select a time slot');
      return;
    }
    
    onConfirm(selectedDate, selectedTime);
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Reschedule Booking</h2>
          <p className="text-gray-600 mb-4">
            Select a new date and time for your service.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {availableDates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => {
                      setSelectedDate(date);
                      setError('');
                    }}
                    className={`p-2 border rounded-md text-center text-sm ${
                      selectedDate === date
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {formatDate(date)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              {isLoadingSlots ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black"></div>
                </div>
              ) : availableTimeSlots.length === 0 ? (
                <p className="text-gray-500 italic py-2">No time slots available for this date.</p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableTimeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => {
                        setSelectedTime(slot.startTime);
                        setError('');
                      }}
                      className={`p-2 border rounded-md text-center text-sm ${
                        selectedTime === slot.startTime
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {slot.startTime}
                    </button>
                  ))}
                </div>
              )}
              {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
              )}
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                disabled={isProcessing}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                disabled={isProcessing || isLoadingSlots || availableTimeSlots.length === 0}
              >
                {isProcessing ? 'Processing...' : 'Confirm Reschedule'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
