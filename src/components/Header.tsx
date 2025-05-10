'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 bg-black rounded-md flex items-center justify-center text-white font-bold">
                <span>DS</span>
              </div>
              <span className="text-lg font-semibold">DoDoServices</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`hover:text-black transition-colors ${isActive('/') ? 'font-medium' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`hover:text-black transition-colors ${isActive('/services') ? 'font-medium' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/bookings"
              className={`hover:text-black transition-colors ${isActive('/bookings') ? 'font-medium' : ''}`}
            >
              My Bookings
            </Link>
            <Link
              href="/about"
              className={`hover:text-black transition-colors ${isActive('/about') ? 'font-medium' : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`hover:text-black transition-colors ${isActive('/contact') ? 'font-medium' : ''}`}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors relative"
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
