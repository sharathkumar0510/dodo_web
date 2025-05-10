// API client for interacting with our backend API
// This will be useful when we later integrate with the Django REST API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Generic fetch function with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

// API functions for services
export const servicesAPI = {
  // Get all service categories
  getAllCategories: () => fetchAPI('/api/services'),
  
  // Get a specific service category
  getCategory: (categorySlug: string) => fetchAPI(`/api/services/${categorySlug}`),
  
  // Get a specific service with reviews and professionals
  getService: (categorySlug: string, serviceSlug: string) => 
    fetchAPI(`/api/services/${categorySlug}/${serviceSlug}`),
};

// API functions for cart and bookings
export const bookingsAPI = {
  // Create a new booking
  createBooking: (bookingData: any) => 
    fetchAPI('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    }),
  
  // Get user's bookings
  getUserBookings: (userId: string) => 
    fetchAPI(`/api/users/${userId}/bookings`),
};

// API functions for user management
export const usersAPI = {
  // Get user profile
  getProfile: (userId: string) => 
    fetchAPI(`/api/users/${userId}`),
  
  // Update user profile
  updateProfile: (userId: string, profileData: any) => 
    fetchAPI(`/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    }),
  
  // Add a new address
  addAddress: (userId: string, addressData: any) => 
    fetchAPI(`/api/users/${userId}/addresses`, {
      method: 'POST',
      body: JSON.stringify(addressData),
    }),
};
