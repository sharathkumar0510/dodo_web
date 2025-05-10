// Service Category Type
export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  isNew?: boolean;
  services: Service[];
}

// Service Type
export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  categoryId: string;
  isNew?: boolean;
  rating?: number;
  totalBookings?: number;
  packages: ServicePackage[];
}

// Service Package Type
export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  duration: number;
  serviceId: string;
  features: string[];
  isPopular?: boolean;
}

// Professional Type
export interface Professional {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalJobs: number;
  experience: number;
  services: string[]; // Service IDs
}

// Review Type
export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  serviceId: string;
  rating: number;
  comment: string;
  date: string;
  professionalId: string;
}

// User Type
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  addresses: Address[];
}

// Address Type
export interface Address {
  id: string;
  userId: string;
  type: 'home' | 'work' | 'other';
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

// Booking Type
export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  packageId: string;
  professionalId?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  date: string;
  time: string;
  address: Address;
  totalAmount: number;
  paymentMethod: 'online' | 'cash';
  paymentStatus: 'pending' | 'completed';
}

// Cart Item Type
export interface CartItem {
  packageId: string;
  quantity: number;
}

// Cart Type
export interface Cart {
  items: CartItem[];
  totalAmount: number;
  discount: number;
  finalAmount: number;
}
