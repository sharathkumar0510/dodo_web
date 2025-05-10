'use client';

import Link from 'next/link';
import { Address, PaymentMethod } from '@/app/checkout/page';

interface OrderConfirmationProps {
  orderId: string;
  total: number;
  address: Address;
  paymentMethod: PaymentMethod;
}

export default function OrderConfirmation({ 
  orderId, 
  total,
  address,
  paymentMethod
}: OrderConfirmationProps) {
  // Get current date and estimated service date (3 days from now)
  const currentDate = new Date();
  const estimatedDate = new Date(currentDate);
  estimatedDate.setDate(currentDate.getDate() + 3);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Format payment method for display
  const getPaymentMethodDisplay = () => {
    switch (paymentMethod.type) {
      case 'card':
        return `Credit/Debit Card (ending in ${paymentMethod.cardNumber?.slice(-4)})`;
      case 'upi':
        return `UPI (${paymentMethod.upiId})`;
      case 'cod':
        return 'Cash on Delivery';
      default:
        return 'Not specified';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your order. We have received your booking and will process it shortly.
      </p>
      
      <div className="bg-gray-50 p-4 rounded-md text-left mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-medium">{orderId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="font-medium">{formatDate(currentDate)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="font-medium">₹{total.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Service Date</p>
            <p className="font-medium">{formatDate(estimatedDate)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment Method</p>
            <p className="font-medium">{getPaymentMethodDisplay()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Delivery Address</p>
            <p className="font-medium">{address.fullName}</p>
            <p className="text-sm">{address.addressLine1}, {address.city}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600">
          We will send you an email confirmation with details and tracking info.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
          <Link 
            href="/services"
            className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Browse More Services
          </Link>
        </div>
      </div>
    </div>
  );
}
