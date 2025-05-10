'use client';

import { useState } from 'react';

interface AddNotesModalProps {
  onCancel: () => void;
  onConfirm: (notes: string) => void;
  isProcessing: boolean;
  currentNotes: string;
}

export default function AddNotesModal({ 
  onCancel, 
  onConfirm, 
  isProcessing,
  currentNotes
}: AddNotesModalProps) {
  const [notes, setNotes] = useState(currentNotes);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(notes);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {currentNotes ? 'Edit Notes' : 'Add Notes'}
          </h2>
          <p className="text-gray-600 mb-4">
            Add any special instructions or notes for the service provider.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="E.g., Please bring eco-friendly products, I have pets at home, etc."
                rows={4}
              />
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
                disabled={isProcessing}
              >
                {isProcessing ? 'Saving...' : 'Save Notes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
