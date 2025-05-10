'use client';

import { useState } from 'react';
import { PaymentMethod } from '@/app/checkout/page';

interface PaymentFormProps {
  initialData: PaymentMethod;
  onSubmit: (data: PaymentMethod) => void;
  onBack: () => void;
  total: number;
}

export default function PaymentForm({ initialData, onSubmit, onBack, total }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentMethod>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof PaymentMethod, string>>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof PaymentMethod]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handlePaymentTypeChange = (type: 'card' | 'upi' | 'cod') => {
    setFormData(prev => ({
      ...prev,
      type
    }));
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PaymentMethod, string>> = {};
    
    if (formData.type === 'card') {
      if (!formData.cardNumber?.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }
      
      if (!formData.cardExpiry?.trim()) {
        newErrors.cardExpiry = 'Expiry date is required';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = 'Please enter a valid expiry date (MM/YY)';
      }
      
      if (!formData.cardCvv?.trim()) {
        newErrors.cardCvv = 'CVV is required';
      } else if (!/^\d{3}$/.test(formData.cardCvv)) {
        newErrors.cardCvv = 'Please enter a valid 3-digit CVV';
      }
    } else if (formData.type === 'upi') {
      if (!formData.upiId?.trim()) {
        newErrors.upiId = 'UPI ID is required';
      } else if (!/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(formData.upiId)) {
        newErrors.upiId = 'Please enter a valid UPI ID (e.g., name@upi)';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
    
    if (errors.cardNumber) {
      setErrors(prev => ({
        ...prev,
        cardNumber: ''
      }));
    }
  };
  
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    setFormData(prev => ({
      ...prev,
      cardExpiry: value
    }));
    
    if (errors.cardExpiry) {
      setErrors(prev => ({
        ...prev,
        cardExpiry: ''
      }));
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
      
      <div className="mb-6">
        <div className="flex flex-col space-y-3">
          <label className={`border rounded-md p-4 cursor-pointer ${formData.type === 'card' ? 'border-black' : 'border-gray-300'}`}>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentType"
                checked={formData.type === 'card'}
                onChange={() => handlePaymentTypeChange('card')}
                className="form-radio h-4 w-4 text-black"
              />
              <span className="ml-2 font-medium">Credit / Debit Card</span>
            </div>
          </label>
          
          <label className={`border rounded-md p-4 cursor-pointer ${formData.type === 'upi' ? 'border-black' : 'border-gray-300'}`}>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentType"
                checked={formData.type === 'upi'}
                onChange={() => handlePaymentTypeChange('upi')}
                className="form-radio h-4 w-4 text-black"
              />
              <span className="ml-2 font-medium">UPI</span>
            </div>
          </label>
          
          <label className={`border rounded-md p-4 cursor-pointer ${formData.type === 'cod' ? 'border-black' : 'border-gray-300'}`}>
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentType"
                checked={formData.type === 'cod'}
                onChange={() => handlePaymentTypeChange('cod')}
                className="form-radio h-4 w-4 text-black"
              />
              <span className="ml-2 font-medium">Cash on Delivery</span>
            </div>
          </label>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {formData.type === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number*
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber || ''}
                onChange={handleCardNumberChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date*
                </label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry || ''}
                  onChange={handleExpiryChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.cardExpiry ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {errors.cardExpiry && (
                  <p className="mt-1 text-sm text-red-500">{errors.cardExpiry}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV*
                </label>
                <input
                  type="password"
                  name="cardCvv"
                  value={formData.cardCvv || ''}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.cardCvv ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="123"
                  maxLength={3}
                />
                {errors.cardCvv && (
                  <p className="mt-1 text-sm text-red-500">{errors.cardCvv}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="saveForLater"
                  checked={formData.saveForLater || false}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-black"
                />
                <span className="ml-2 text-sm text-gray-700">Save this card for future payments</span>
              </label>
            </div>
          </div>
        )}
        
        {formData.type === 'upi' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              UPI ID*
            </label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.upiId ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="yourname@upi"
            />
            {errors.upiId && (
              <p className="mt-1 text-sm text-red-500">{errors.upiId}</p>
            )}
          </div>
        )}
        
        {formData.type === 'cod' && (
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-700">
              You will pay ₹{total.toLocaleString()} at the time of service delivery.
            </p>
          </div>
        )}
        
        <div className="mt-8 flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Continue to Review
          </button>
        </div>
      </form>
    </div>
  );
}
