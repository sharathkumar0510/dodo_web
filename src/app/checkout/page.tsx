'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

// Step components
import AddressForm from '@/components/checkout/AddressForm';
import PaymentForm from '@/components/checkout/PaymentForm';
import TimeSlotSelector from '@/components/checkout/TimeSlotSelector';
import OrderReview from '@/components/checkout/OrderReview';
import OrderConfirmation from '@/components/checkout/OrderConfirmation';

// Types
export interface Address {
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  addressType: 'home' | 'work' | 'other';
}

export interface PaymentMethod {
  type: 'card' | 'upi' | 'cod';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  upiId?: string;
  saveForLater?: boolean;
}

export interface CheckoutData {
  address: Address;
  paymentMethod: PaymentMethod;
  scheduledDate?: string;
  scheduledTime?: string;
  appliedCoupon?: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items: cartItems, subtotal, discount, clearCart } = useCart();

  const [currentStep, setCurrentStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    address: {
      fullName: '',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      addressType: 'home'
    },
    paymentMethod: {
      type: 'card',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      saveForLater: false
    }
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Calculate tax (GST) - 18% of the amount after discount
  const taxRate = 0.18;
  const taxableAmount = subtotal - discount;
  const tax = Math.round(taxableAmount * taxRate);
  const total = taxableAmount + tax;

  // Check if cart is empty and redirect to cart page
  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      router.push('/cart');
    }
  }, [cartItems, router, orderComplete]);

  const handleAddressSubmit = (addressData: Address) => {
    setCheckoutData(prev => ({ ...prev, address: addressData }));
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (paymentData: PaymentMethod) => {
    setCheckoutData(prev => ({ ...prev, paymentMethod: paymentData }));
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };

  const handleTimeSlotSubmit = (date: string, time: string) => {
    setCheckoutData(prev => ({ ...prev, scheduledDate: date, scheduledTime: time }));
    setCurrentStep(4);
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    try {
      // Simulate API call to place order
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate a random order ID
      const newOrderId = 'ORD' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(newOrderId);

      // Clear cart after successful order
      clearCart();

      // Show order confirmation
      setOrderComplete(true);
      setCurrentStep(5);
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Render the appropriate step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AddressForm
          initialData={checkoutData.address}
          onSubmit={handleAddressSubmit}
        />;
      case 2:
        return <PaymentForm
          initialData={checkoutData.paymentMethod}
          onSubmit={handlePaymentSubmit}
          onBack={goBack}
          total={total}
        />;
      case 3:
        return <TimeSlotSelector
          onSubmit={handleTimeSlotSubmit}
          onBack={goBack}
          isProcessing={isProcessing}
        />;
      case 4:
        return <OrderReview
          checkoutData={checkoutData}
          cartItems={cartItems}
          subtotal={subtotal}
          discount={discount}
          tax={tax}
          total={total}
          onPlaceOrder={handlePlaceOrder}
          onBack={goBack}
          isProcessing={isProcessing}
        />;
      case 5:
        return <OrderConfirmation
          orderId={orderId}
          total={total}
          address={checkoutData.address}
          paymentMethod={checkoutData.paymentMethod}
          scheduledDate={checkoutData.scheduledDate}
          scheduledTime={checkoutData.scheduledTime}
        />;
      default:
        return <AddressForm
          initialData={checkoutData.address}
          onSubmit={handleAddressSubmit}
        />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {!orderComplete && (
        <>
          <div className="mb-6 flex justify-between items-center">
            <Link href="/cart" className="text-black hover:underline">
              ← Back to Cart
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          {/* Checkout Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="text-sm">Address</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-black' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-sm">Payment</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-black' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? 'bg-black text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-sm">Schedule</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${currentStep >= 4 ? 'bg-black' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${currentStep >= 4 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentStep >= 4 ? 'bg-black text-white' : 'bg-gray-200'}`}>
                  4
                </div>
                <span className="text-sm">Review</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step Content */}
      <div className="max-w-3xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
}
