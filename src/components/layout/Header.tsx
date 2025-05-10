'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, ShoppingCart, Menu, X, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('Miyapur Cross Road');
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 bg-black rounded-md flex items-center justify-center text-white font-bold">
              <span>DS</span>
            </div>
            <span className="text-lg font-semibold hidden md:block">DoDoServices</span>
          </Link>
          
          {/* Location Selector */}
          <button 
            className="flex items-center space-x-1 text-sm md:text-base border rounded-full px-3 py-1.5 hover:bg-gray-50"
            onClick={() => {/* Open location modal */}}
          >
            <MapPin size={16} />
            <span className="truncate max-w-[120px] md:max-w-[200px]">{location}</span>
          </button>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for services"
                className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black/5"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/cart" className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/account" className="flex items-center space-x-1">
              <User size={22} />
              <span className="text-sm">Account</span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Search Bar - Mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for services"
              className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/cart" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart size={20} />
                <span>Cart</span>
              </Link>
              <Link 
                href="/account" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
                <span>Account</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
