'use client';

import { useState, useEffect } from 'react';
import { api, AddOnService } from '@/lib/api/mockApi';

interface AddOnsModalProps {
  onCancel: () => void;
  onConfirm: (addOnIds: number[]) => void;
  isProcessing: boolean;
  currentAddOns: AddOnService[];
}

export default function AddOnsModal({ 
  onCancel, 
  onConfirm, 
  isProcessing,
  currentAddOns
}: AddOnsModalProps) {
  const [addOns, setAddOns] = useState<AddOnService[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch available add-ons
  useEffect(() => {
    const fetchAddOns = async () => {
      setIsLoading(true);
      try {
        const response = await api.getAddOnServices();
        
        // Filter out already selected add-ons
        const currentAddOnIds = currentAddOns.map(addon => addon.id);
        const availableAddOns = response.data.filter(addon => !currentAddOnIds.includes(addon.id));
        
        setAddOns(availableAddOns);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch add-on services');
        console.error('Error fetching add-on services:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAddOns();
  }, [currentAddOns]);
  
  const handleToggleAddOn = (id: number) => {
    setSelectedAddOns(prev => {
      if (prev.includes(id)) {
        return prev.filter(addonId => addonId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedAddOns.length === 0) {
      return;
    }
    
    onConfirm(selectedAddOns);
  };
  
  // Calculate total price of selected add-ons
  const calculateTotal = () => {
    return addOns
      .filter(addon => selectedAddOns.includes(addon.id))
      .reduce((total, addon) => total + addon.price, 0);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add More Services</h2>
          <p className="text-gray-600 mb-4">
            Select additional services to enhance your booking.
          </p>
          
          {isLoading ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
              <p>{error}</p>
            </div>
          ) : addOns.length === 0 ? (
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-500 italic">No additional services available.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4 space-y-3">
                {addOns.map((addon) => (
                  <div 
                    key={addon.id} 
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedAddOns.includes(addon.id) ? 'border-black bg-gray-50' : 'border-gray-300'
                    }`}
                    onClick={() => handleToggleAddOn(addon.id)}
                  >
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        checked={selectedAddOns.includes(addon.id)}
                        onChange={() => handleToggleAddOn(addon.id)}
                        className="mt-1 h-4 w-4 text-black border-gray-300 rounded"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{addon.name}</h3>
                          <span className="font-semibold">₹{addon.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
                        {addon.duration > 0 && (
                          <p className="text-sm text-gray-600">Duration: +{addon.duration} mins</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedAddOns.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total Add-ons:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              )}
              
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
                  disabled={isProcessing || selectedAddOns.length === 0}
                >
                  {isProcessing ? 'Processing...' : 'Add Selected Services'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
