// Mock API service to simulate backend API calls

// Types
export interface ServiceCategory {
  id: number;
  name: string;
  description: string;
  slug: string;
}

export interface SubService {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  duration: number;
  categoryId: number;
  features: string[];
  rating?: number;
  totalBookings?: number;
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  serviceId: number;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  id: number;
  serviceId: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  duration: number;
  quantity: number;
}

export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'rescheduled';

export interface BookingTimeSlot {
  id: number;
  date: string; // ISO date string
  startTime: string; // 24-hour format (HH:MM)
  endTime: string; // 24-hour format (HH:MM)
  isAvailable: boolean;
}

export interface AddOnService {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
}

export interface Address {
  id?: number;
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  addressType: 'home' | 'work' | 'other';
}

export interface Booking {
  id: number;
  userId: number;
  orderId: string;
  serviceId: number;
  serviceName: string;
  serviceDescription: string;
  price: number;
  discountedPrice?: number;
  quantity: number;
  totalAmount: number;
  status: BookingStatus;
  bookingDate: string; // ISO date string
  scheduledDate: string; // ISO date string
  scheduledTime: string; // 24-hour format (HH:MM)
  address: Address;
  paymentMethod: string;
  paymentStatus: 'paid' | 'pending' | 'refunded' | 'partially_refunded';
  notes?: string;
  addOns?: AddOnService[];
  cancellationReason?: string;
  refundAmount?: number;
  refundDate?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Mock data
const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    name: 'Cleaning & Pest Control',
    description: 'Professional cleaning and pest control services for your home.',
    slug: 'cleaning-pest-control'
  },
  {
    id: 2,
    name: 'AC & Appliance Repair',
    description: 'Expert repair services for all your home appliances.',
    slug: 'ac-appliance-repair'
  },
  {
    id: 3,
    name: 'Salon & Spa Services',
    description: 'Professional salon and spa services at your doorstep.',
    slug: 'salon-spa'
  },
  {
    id: 4,
    name: 'Electrician, Plumber & Carpenter',
    description: 'Professional home repair and maintenance services.',
    slug: 'home-repairs'
  },
  {
    id: 5,
    name: 'Home Painting',
    description: 'Professional painting services for your home.',
    slug: 'home-painting'
  }
];

const subServices: SubService[] = [
  // Cleaning & Pest Control
  {
    id: 101,
    name: 'Bathroom Cleaning',
    description: 'Professional bathroom deep cleaning service',
    price: 499,
    discountedPrice: 399,
    duration: 60,
    categoryId: 1,
    features: [
      'Floor cleaning',
      'Toilet cleaning',
      'Sink cleaning',
      'Mirror cleaning',
      'Basic sanitization'
    ],
    rating: 4.8,
    totalBookings: 1250
  },
  {
    id: 102,
    name: 'Kitchen Cleaning',
    description: 'Deep cleaning for your kitchen',
    price: 599,
    discountedPrice: 499,
    duration: 90,
    categoryId: 1,
    features: [
      'Countertop cleaning',
      'Cabinet exterior cleaning',
      'Appliance exterior cleaning',
      'Floor cleaning',
      'Sink cleaning'
    ],
    rating: 4.7,
    totalBookings: 980
  },
  {
    id: 103,
    name: 'Full Home Cleaning',
    description: 'Complete home cleaning service',
    price: 1499,
    discountedPrice: 1299,
    duration: 240,
    categoryId: 1,
    features: [
      'Living room cleaning',
      'Bedroom cleaning',
      'Kitchen cleaning',
      'Bathroom cleaning',
      'Floor cleaning',
      'Dusting of all surfaces'
    ],
    rating: 4.9,
    totalBookings: 750
  },
  {
    id: 104,
    name: 'Pest Control',
    description: 'Effective pest control treatment',
    price: 999,
    discountedPrice: 899,
    duration: 120,
    categoryId: 1,
    features: [
      'Cockroach treatment',
      'Ant treatment',
      'Bed bug treatment',
      'Mosquito treatment',
      '30-day warranty'
    ],
    rating: 4.6,
    totalBookings: 520
  },

  // AC & Appliance Repair
  {
    id: 201,
    name: 'AC Service',
    description: 'Regular AC maintenance and cleaning',
    price: 499,
    discountedPrice: 399,
    duration: 60,
    categoryId: 2,
    features: [
      'Filter cleaning',
      'Condenser cleaning',
      'Performance check',
      'Gas level check',
      'General maintenance'
    ],
    rating: 4.7,
    totalBookings: 1800
  },
  {
    id: 202,
    name: 'AC Repair',
    description: 'AC repair and troubleshooting',
    price: 799,
    discountedPrice: 699,
    duration: 90,
    categoryId: 2,
    features: [
      'Fault diagnosis',
      'Repair of identified issues',
      'Performance testing',
      'General maintenance',
      '30-day warranty on repairs'
    ],
    rating: 4.5,
    totalBookings: 1200
  },
  {
    id: 203,
    name: 'Refrigerator Repair',
    description: 'Refrigerator repair and maintenance',
    price: 599,
    discountedPrice: 499,
    duration: 60,
    categoryId: 2,
    features: [
      'Fault diagnosis',
      'Repair of identified issues',
      'Performance testing',
      'General maintenance',
      '30-day warranty on repairs'
    ],
    rating: 4.6,
    totalBookings: 850
  },
  {
    id: 204,
    name: 'Washing Machine Repair',
    description: 'Washing machine repair and servicing',
    price: 699,
    discountedPrice: 599,
    duration: 75,
    categoryId: 2,
    features: [
      'Fault diagnosis',
      'Repair of identified issues',
      'Performance testing',
      'General maintenance',
      '30-day warranty on repairs'
    ],
    rating: 4.5,
    totalBookings: 720
  },

  // Salon & Spa Services
  {
    id: 301,
    name: 'Haircut & Styling',
    description: 'Professional haircut and styling',
    price: 299,
    discountedPrice: 249,
    duration: 45,
    categoryId: 3,
    features: [
      'Consultation',
      'Shampoo & conditioning',
      'Haircut',
      'Blow dry & styling',
      'Hair care advice'
    ],
    rating: 4.8,
    totalBookings: 2100
  },
  {
    id: 302,
    name: 'Facial',
    description: 'Rejuvenating facial treatment',
    price: 799,
    discountedPrice: 699,
    duration: 60,
    categoryId: 3,
    features: [
      'Skin analysis',
      'Deep cleansing',
      'Exfoliation',
      'Face massage',
      'Mask application',
      'Moisturizing'
    ],
    rating: 4.9,
    totalBookings: 1650
  },
  {
    id: 303,
    name: 'Waxing',
    description: 'Professional waxing services',
    price: 599,
    discountedPrice: 499,
    duration: 45,
    categoryId: 3,
    features: [
      'Hygienic procedure',
      'Premium quality wax',
      'Pre-wax care',
      'Post-wax care',
      'Skin soothing treatment'
    ],
    rating: 4.7,
    totalBookings: 1950
  },
  {
    id: 304,
    name: 'Massage',
    description: 'Relaxing therapeutic massage',
    price: 999,
    discountedPrice: 899,
    duration: 60,
    categoryId: 3,
    features: [
      'Consultation',
      'Aromatherapy options',
      'Full body massage',
      'Pressure customization',
      'Relaxation techniques'
    ],
    rating: 4.9,
    totalBookings: 1400
  }
];

const reviews: Review[] = [
  {
    id: 1,
    userId: 101,
    userName: 'Ananya Gupta',
    serviceId: 101,
    rating: 5,
    comment: 'Excellent service! The bathroom looks brand new. The professional was punctual and very thorough with the cleaning.',
    date: '2023-04-15'
  },
  {
    id: 2,
    userId: 102,
    userName: 'Vikram Malhotra',
    serviceId: 101,
    rating: 4,
    comment: 'Good service overall. The cleaning was done well, but took a bit longer than expected.',
    date: '2023-04-10'
  },
  {
    id: 3,
    userId: 103,
    userName: 'Meera Reddy',
    serviceId: 101,
    rating: 5,
    comment: 'Amazing service! The professional was very skilled and cleaned every corner of my bathroom. Will definitely book again.',
    date: '2023-04-05'
  },
  {
    id: 4,
    userId: 104,
    userName: 'Arjun Kapoor',
    serviceId: 201,
    rating: 5,
    comment: 'Excellent service! My AC is working perfectly now. The technician was very knowledgeable and fixed the issue quickly.',
    date: '2023-04-12'
  },
  {
    id: 5,
    userId: 105,
    userName: 'Sneha Joshi',
    serviceId: 201,
    rating: 4,
    comment: 'Good service. The AC is working better now, but there\'s still a slight noise. The technician was professional though.',
    date: '2023-04-08'
  },
  {
    id: 6,
    userId: 106,
    userName: 'Karan Mehta',
    serviceId: 301,
    rating: 5,
    comment: 'Best haircut I\'ve had in a long time! The stylist understood exactly what I wanted and delivered perfectly.',
    date: '2023-04-14'
  }
];

// Mock add-on services
const addOnServices: AddOnService[] = [
  {
    id: 1,
    name: 'Deep Cleaning',
    description: 'Extra thorough cleaning for tough stains and dirt',
    price: 299,
    duration: 30
  },
  {
    id: 2,
    name: 'Sanitization',
    description: 'Complete sanitization of the area with hospital-grade disinfectants',
    price: 199,
    duration: 20
  },
  {
    id: 3,
    name: 'Express Service',
    description: 'Priority scheduling and faster service completion',
    price: 149,
    duration: 0
  },
  {
    id: 4,
    name: 'Premium Products',
    description: 'Use of high-end, eco-friendly cleaning products',
    price: 249,
    duration: 0
  },
  {
    id: 5,
    name: 'Furniture Protection',
    description: 'Application of protective coating on furniture',
    price: 349,
    duration: 45
  }
];

// Mock time slots for scheduling
const generateTimeSlots = (date: string, count: number = 8): BookingTimeSlot[] => {
  const slots: BookingTimeSlot[] = [];
  const startHour = 9; // 9 AM

  for (let i = 0; i < count; i++) {
    const startTime = `${startHour + Math.floor(i * 1.5)}:${i % 2 === 0 ? '00' : '30'}`;
    const endHour = startHour + Math.floor((i + 1) * 1.5);
    const endMinute = (i + 1) % 2 === 0 ? '00' : '30';
    const endTime = `${endHour}:${endMinute}`;

    slots.push({
      id: i + 1,
      date,
      startTime,
      endTime,
      isAvailable: Math.random() > 0.3 // 70% chance of being available
    });
  }

  return slots;
};

// Generate dates for the next 7 days
const generateDates = (days: number = 7): string[] => {
  const dates: string[] = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  return dates;
};

// Generate time slots for the next 7 days
const availableDates = generateDates();
const timeSlots: Record<string, BookingTimeSlot[]> = {};

availableDates.forEach(date => {
  timeSlots[date] = generateTimeSlots(date);
});

// Mock bookings data
const bookings: Booking[] = [
  {
    id: 1,
    userId: 1,
    orderId: 'ORD123456',
    serviceId: 101,
    serviceName: 'Bathroom Cleaning',
    serviceDescription: 'Professional bathroom deep cleaning service',
    price: 499,
    discountedPrice: 399,
    quantity: 1,
    totalAmount: 399,
    status: 'confirmed',
    bookingDate: '2023-06-15T10:30:00Z',
    scheduledDate: '2023-06-20',
    scheduledTime: '10:00',
    address: {
      id: 1,
      fullName: 'Rahul Sharma',
      phoneNumber: '9876543210',
      addressLine1: '123, Green Park',
      addressLine2: 'Near City Mall',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      addressType: 'home'
    },
    paymentMethod: 'Credit/Debit Card',
    paymentStatus: 'paid',
    notes: 'Please bring eco-friendly cleaning products',
    addOns: [addOnServices[0], addOnServices[1]],
    createdAt: '2023-06-15T10:30:00Z',
    updatedAt: '2023-06-15T10:30:00Z'
  },
  {
    id: 2,
    userId: 1,
    orderId: 'ORD123457',
    serviceId: 201,
    serviceName: 'AC Service',
    serviceDescription: 'Regular AC maintenance and cleaning',
    price: 499,
    discountedPrice: 399,
    quantity: 1,
    totalAmount: 399,
    status: 'completed',
    bookingDate: '2023-05-10T14:15:00Z',
    scheduledDate: '2023-05-15',
    scheduledTime: '14:00',
    address: {
      id: 1,
      fullName: 'Rahul Sharma',
      phoneNumber: '9876543210',
      addressLine1: '123, Green Park',
      addressLine2: 'Near City Mall',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      addressType: 'home'
    },
    paymentMethod: 'UPI',
    paymentStatus: 'paid',
    createdAt: '2023-05-10T14:15:00Z',
    updatedAt: '2023-05-15T16:30:00Z'
  },
  {
    id: 3,
    userId: 1,
    orderId: 'ORD123458',
    serviceId: 301,
    serviceName: 'Haircut & Styling',
    serviceDescription: 'Professional haircut and styling',
    price: 299,
    discountedPrice: 249,
    quantity: 1,
    totalAmount: 249,
    status: 'cancelled',
    bookingDate: '2023-06-01T09:45:00Z',
    scheduledDate: '2023-06-05',
    scheduledTime: '11:30',
    address: {
      id: 2,
      fullName: 'Rahul Sharma',
      phoneNumber: '9876543210',
      addressLine1: '456, Office Complex',
      addressLine2: 'Sector 18',
      city: 'Noida',
      state: 'Uttar Pradesh',
      pincode: '201301',
      addressType: 'work'
    },
    paymentMethod: 'Credit/Debit Card',
    paymentStatus: 'refunded',
    cancellationReason: 'Schedule conflict',
    refundAmount: 249,
    refundDate: '2023-06-02T10:15:00Z',
    createdAt: '2023-06-01T09:45:00Z',
    updatedAt: '2023-06-02T10:15:00Z'
  },
  {
    id: 4,
    userId: 1,
    orderId: 'ORD123459',
    serviceId: 102,
    serviceName: 'Kitchen Cleaning',
    serviceDescription: 'Deep cleaning for your kitchen',
    price: 599,
    discountedPrice: 499,
    quantity: 1,
    totalAmount: 499,
    status: 'pending',
    bookingDate: '2023-06-18T16:20:00Z',
    scheduledDate: '2023-06-25',
    scheduledTime: '09:00',
    address: {
      id: 1,
      fullName: 'Rahul Sharma',
      phoneNumber: '9876543210',
      addressLine1: '123, Green Park',
      addressLine2: 'Near City Mall',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      addressType: 'home'
    },
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'pending',
    createdAt: '2023-06-18T16:20:00Z',
    updatedAt: '2023-06-18T16:20:00Z'
  },
  {
    id: 5,
    userId: 1,
    orderId: 'ORD123460',
    serviceId: 103,
    serviceName: 'Full Home Cleaning',
    serviceDescription: 'Complete home cleaning service',
    price: 1499,
    discountedPrice: 1299,
    quantity: 1,
    totalAmount: 1648, // Including add-on
    status: 'rescheduled',
    bookingDate: '2023-06-10T11:30:00Z',
    scheduledDate: '2023-06-28',
    scheduledTime: '13:00',
    address: {
      id: 1,
      fullName: 'Rahul Sharma',
      phoneNumber: '9876543210',
      addressLine1: '123, Green Park',
      addressLine2: 'Near City Mall',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      addressType: 'home'
    },
    paymentMethod: 'UPI',
    paymentStatus: 'paid',
    notes: 'Have pets at home, please use pet-friendly products',
    addOns: [addOnServices[3]],
    createdAt: '2023-06-10T11:30:00Z',
    updatedAt: '2023-06-12T14:45:00Z'
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const api = {
  // Get all service categories
  getServiceCategories: async () => {
    await delay(800); // Simulate network delay
    return { data: serviceCategories };
  },

  // Get a specific service category by ID
  getServiceCategory: async (id: number) => {
    await delay(600);
    const category = serviceCategories.find(cat => cat.id === id);
    if (!category) {
      throw new Error('Category not found');
    }
    return { data: category };
  },

  // Get a specific service category by slug
  getServiceCategoryBySlug: async (slug: string) => {
    await delay(600);
    const category = serviceCategories.find(cat => cat.slug === slug);
    if (!category) {
      throw new Error('Category not found');
    }
    return { data: category };
  },

  // Get all services for a category
  getServicesByCategory: async (categoryId: number) => {
    await delay(700);
    const services = subServices.filter(service => service.categoryId === categoryId);
    return { data: services };
  },

  // Get a specific service by ID
  getService: async (id: number) => {
    await delay(500);
    const service = subServices.find(service => service.id === id);
    if (!service) {
      throw new Error('Service not found');
    }
    return { data: service };
  },

  // Get reviews for a service
  getServiceReviews: async (serviceId: number) => {
    await delay(600);
    const serviceReviews = reviews.filter(review => review.serviceId === serviceId);
    return { data: serviceReviews };
  },

  // Add a service to cart (mock implementation)
  addToCart: async (serviceId: number, quantity: number = 1) => {
    await delay(400);
    const service = subServices.find(s => s.id === serviceId);
    if (!service) {
      throw new Error('Service not found');
    }

    // In a real app, this would add to a persistent cart
    return {
      success: true,
      message: `Added ${service.name} to cart`,
      data: {
        id: Math.floor(Math.random() * 1000),
        serviceId: service.id,
        name: service.name,
        description: service.description,
        price: service.price,
        discountedPrice: service.discountedPrice,
        duration: service.duration,
        quantity
      }
    };
  },

  // Get all bookings for a user
  getUserBookings: async (userId: number) => {
    await delay(800);
    const userBookings = bookings.filter(booking => booking.userId === userId);
    return { data: userBookings };
  },

  // Get a specific booking by ID
  getBooking: async (bookingId: number) => {
    await delay(600);
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return { data: booking };
  },

  // Cancel a booking
  cancelBooking: async (bookingId: number, reason: string) => {
    await delay(1000);
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    if (bookingIndex === -1) {
      throw new Error('Booking not found');
    }

    const booking = bookings[bookingIndex];

    // Check if booking can be cancelled
    if (['completed', 'cancelled', 'in_progress'].includes(booking.status)) {
      throw new Error(`Booking cannot be cancelled because it is ${booking.status}`);
    }

    // Update booking status
    const updatedBooking = {
      ...booking,
      status: 'cancelled' as BookingStatus,
      cancellationReason: reason,
      refundAmount: booking.totalAmount,
      refundDate: new Date().toISOString(),
      paymentStatus: 'refunded' as const,
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would update the database
    bookings[bookingIndex] = updatedBooking;

    return {
      success: true,
      message: 'Booking cancelled successfully',
      data: updatedBooking
    };
  },

  // Reschedule a booking
  rescheduleBooking: async (bookingId: number, newDate: string, newTime: string) => {
    await delay(1000);
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    if (bookingIndex === -1) {
      throw new Error('Booking not found');
    }

    const booking = bookings[bookingIndex];

    // Check if booking can be rescheduled
    if (['completed', 'cancelled', 'in_progress'].includes(booking.status)) {
      throw new Error(`Booking cannot be rescheduled because it is ${booking.status}`);
    }

    // Update booking
    const updatedBooking = {
      ...booking,
      status: 'rescheduled' as BookingStatus,
      scheduledDate: newDate,
      scheduledTime: newTime,
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would update the database
    bookings[bookingIndex] = updatedBooking;

    return {
      success: true,
      message: 'Booking rescheduled successfully',
      data: updatedBooking
    };
  },

  // Add notes to a booking
  addBookingNotes: async (bookingId: number, notes: string) => {
    await delay(600);
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    if (bookingIndex === -1) {
      throw new Error('Booking not found');
    }

    // Update booking
    const updatedBooking = {
      ...bookings[bookingIndex],
      notes,
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would update the database
    bookings[bookingIndex] = updatedBooking;

    return {
      success: true,
      message: 'Notes added successfully',
      data: updatedBooking
    };
  },

  // Add add-on services to a booking
  addBookingAddOns: async (bookingId: number, addOnIds: number[]) => {
    await delay(800);
    const bookingIndex = bookings.findIndex(b => b.id === bookingId);
    if (bookingIndex === -1) {
      throw new Error('Booking not found');
    }

    const booking = bookings[bookingIndex];

    // Check if booking can be modified
    if (['completed', 'cancelled', 'in_progress'].includes(booking.status)) {
      throw new Error(`Add-ons cannot be added because the booking is ${booking.status}`);
    }

    // Get add-on services
    const selectedAddOns = addOnServices.filter(addon => addOnIds.includes(addon.id));
    if (selectedAddOns.length === 0) {
      throw new Error('No valid add-on services selected');
    }

    // Calculate new total
    const addOnTotal = selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    const newTotal = booking.totalAmount + addOnTotal;

    // Update booking
    const updatedBooking = {
      ...booking,
      addOns: [...(booking.addOns || []), ...selectedAddOns],
      totalAmount: newTotal,
      updatedAt: new Date().toISOString()
    };

    // In a real app, this would update the database
    bookings[bookingIndex] = updatedBooking;

    return {
      success: true,
      message: 'Add-on services added successfully',
      data: updatedBooking
    };
  },

  // Get available time slots for scheduling
  getAvailableTimeSlots: async (date: string) => {
    await delay(700);

    // If we don't have slots for this date, generate them
    if (!timeSlots[date]) {
      timeSlots[date] = generateTimeSlots(date);
    }

    return {
      data: timeSlots[date].filter(slot => slot.isAvailable)
    };
  },

  // Get available add-on services
  getAddOnServices: async () => {
    await delay(500);
    return { data: addOnServices };
  }
};
