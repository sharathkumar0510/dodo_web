'use client';

import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/admin/images"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Image Management</h2>
          <p className="text-gray-600">
            Manage images and icons used throughout the application. Update URLs, alt text, and more.
          </p>
        </Link>
        
        <Link 
          href="/"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Back to Website</h2>
          <p className="text-gray-600">
            Return to the main website to see your changes in action.
          </p>
        </Link>
      </div>
    </div>
  );
}
