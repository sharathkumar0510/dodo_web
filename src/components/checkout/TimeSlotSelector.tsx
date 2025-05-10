'use client';

import { useState, useEffect } from 'react';
import { api, BookingTimeSlot } from '@/lib/api/mockApi';

interface TimeSlotSelectorProps {
  onSubmit: (date: string, time: string) => void;
  onBack: () => void;
  isProcessing?: boolean;
}

export default function TimeSlotSelector({ 
  onSubmit, 
  onBack,
  isProcessing = false
}: TimeSlotSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<BookingTimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [error, setError] = useState('');
  
  // Fetch available dates on component mount
  useEffect(() => {
    const fetchDates = async () => {
      try {
        // In a real app, this would be an API call to get available dates
        // For now, we'll generate dates for the next 7 days
        const today = new Date();
        const dates: string[] = [];
        
        for (let i = 1; i < 8; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          dates.push(date.toISOString().split('T')[0]);
        }
        
        setAvailableDates(dates);
        
        // Select the first date by default
        if (dates.length > 0) {
          setSelectedDate(dates[0]);
        }
      } catch (err) {
        console.error('Error fetching available dates:', err);
        setError('Failed to load available dates. Please try again.');
      }
    };
    
    fetchDates();
  }, []);
  
  // Fetch available time slots when date changes
  useEffect(() => {
    const fetchTimeSlots = async () => {
      if (!selectedDate) return;
      
      setIsLoadingSlots(true);
      setError('');
      
      try {
        const response = await api.getAvailableTimeSlots(selectedDate);
        setAvailableTimeSlots(response.data);
        
        // Select the first time slot by default
        if (response.data.length > 0) {
          setSelectedTime(response.data[0].startTime);
        } else {
          setSelectedTime('');
        }
      } catch (err) {
        console.error('Error fetching time slots:', err);
        setError('Failed to load available time slots. Please try again.');
        setAvailableTimeSlots([]);
        setSelectedTime('');
      } finally {
        setIsLoadingSlots(false);
      }
    };
    
    if (selectedDate) {
      fetchTimeSlots();
    }
  }, [selectedDate]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };
  
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
    
    onSubmit(selectedDate, selectedTime);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Select Service Date & Time</h2>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
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
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time
          </label>
          {isLoadingSlots ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : availableTimeSlots.length === 0 ? (
            <p className="text-gray-500 italic py-2">No time slots available for this date. Please select another date.</p>
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
        </div>
        
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            disabled={isProcessing}
            className={`flex-1 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isProcessing || !selectedDate || !selectedTime}
            className={`flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors ${
              (isProcessing || !selectedDate || !selectedTime) ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
