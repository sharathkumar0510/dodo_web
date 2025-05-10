'use client';

import { CartItem } from '@/lib/api/mockApi';
import { CheckoutData } from '@/app/checkout/page';

interface OrderReviewProps {
  checkoutData: CheckoutData;
  cartItems: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  onPlaceOrder: () => void;
  onBack: () => void;
  isProcessing: boolean;
}

export default function OrderReview({
  checkoutData,
  cartItems,
  subtotal,
  discount,
  tax,
  total,
  onPlaceOrder,
  onBack,
  isProcessing
}: OrderReviewProps) {
  const { address, paymentMethod, scheduledDate, scheduledTime } = checkoutData;

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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Review Your Order</h2>

      <div className="space-y-6">
        {/* Delivery Address */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Delivery Address</h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium">{address.fullName}</p>
            <p>{address.addressLine1}</p>
            {address.addressLine2 && <p>{address.addressLine2}</p>}
            <p>{address.city}, {address.state} {address.pincode}</p>
            <p>Phone: {address.phoneNumber}</p>
            <p className="mt-1 inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
              {address.addressType.charAt(0).toUpperCase() + address.addressType.slice(1)}
            </p>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Payment Method</h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p>{getPaymentMethodDisplay()}</p>
          </div>
        </div>

        {/* Scheduled Date & Time */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Scheduled Date & Time</h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            {scheduledDate && scheduledTime ? (
              <div>
                <p>
                  <span className="font-medium">Date: </span>
                  {new Date(scheduledDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p>
                  <span className="font-medium">Time: </span>
                  {scheduledTime}
                </p>
              </div>
            ) : (
              <p className="text-red-500">No date and time selected</p>
            )}
          </div>
        </div>

        {/* Order Items */}
        <div>
          <h3 className="font-medium mb-2">Order Items</h3>
          <div className="border rounded-md overflow-hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 border-b last:border-b-0">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      ₹{((item.discountedPrice || item.price) * item.quantity).toLocaleString()}
                    </p>
                    {item.discountedPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="font-medium mb-2">Order Summary</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-₹{discount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>GST (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>

              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="text-sm text-gray-600">
          <p>
            By placing this order, you agree to our <a href="#" className="text-black underline">Terms of Service</a> and <a href="#" className="text-black underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Action Buttons */}
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
            type="button"
            onClick={onPlaceOrder}
            disabled={isProcessing}
            className={`flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors ${
              isProcessing ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Processing...
              </div>
            ) : (
              'Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
