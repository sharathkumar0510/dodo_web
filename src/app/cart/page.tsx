'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const router = useRouter();
  const {
    items: cartItems,
    subtotal,
    discount,
    total,
    updateQuantity,
    removeFromCart,
    clearCart,
    isLoading
  } = useCart();

  // No longer need loading state as we're redirecting to checkout page

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add services to proceed.');
      return;
    }

    // Navigate to checkout page
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/" className="text-black hover:underline">
          ← Back to Home
        </Link>
        <Link href="/services" className="text-black hover:underline flex items-center">
          Continue Shopping <span className="ml-1">→</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any services to your cart yet.</p>
          <Link
            href="/services"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Browse Services
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-semibold">Items ({cartItems.length})</h2>
              </div>

              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-b last:border-b-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        <div className="text-gray-600 text-sm mt-1">
                          Duration: {item.duration} mins
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            disabled={isLoading}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            disabled={isLoading}
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold">
                            ₹{(item.discountedPrice || item.price) * item.quantity}
                          </div>
                          {item.discountedPrice && (
                            <div className="text-gray-500 line-through text-sm">
                              ₹{item.price * item.quantity}
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                          disabled={isLoading}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-4 border-b">
                <h2 className="font-semibold">Order Summary</h2>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-₹{discount}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span>₹0</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>

                  {discount > 0 && (
                    <div className="text-green-600 text-sm text-right mt-1">
                      You saved ₹{discount}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className={`w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/services"
                  className="w-full block text-center mt-3 border border-black text-black py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Continue Shopping
                </Link>

                <button
                  onClick={clearCart}
                  disabled={isLoading}
                  className={`w-full text-gray-600 text-sm hover:text-black transition-colors ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
