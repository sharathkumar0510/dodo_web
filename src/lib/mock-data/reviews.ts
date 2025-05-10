import { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: 'rev-1',
    userId: 'user-1',
    userName: 'Ananya Gupta',
    userAvatar: '/users/ananya.jpg',
    serviceId: 'serv-6', // Bathroom Cleaning
    rating: 5,
    comment: 'Excellent service! The bathroom looks brand new. The professional was punctual and very thorough with the cleaning.',
    date: '2023-04-15',
    professionalId: 'prof-4' // Neha Patel
  },
  {
    id: 'rev-2',
    userId: 'user-2',
    userName: 'Vikram Malhotra',
    userAvatar: '/users/vikram.jpg',
    serviceId: 'serv-6', // Bathroom Cleaning
    rating: 4,
    comment: 'Good service overall. The cleaning was done well, but took a bit longer than expected.',
    date: '2023-04-10',
    professionalId: 'prof-4' // Neha Patel
  },
  {
    id: 'rev-3',
    userId: 'user-3',
    userName: 'Meera Reddy',
    userAvatar: '/users/meera.jpg',
    serviceId: 'serv-6', // Bathroom Cleaning
    rating: 5,
    comment: 'Amazing service! The professional was very skilled and cleaned every corner of my bathroom. Will definitely book again.',
    date: '2023-04-05',
    professionalId: 'prof-4' // Neha Patel
  },
  {
    id: 'rev-4',
    userId: 'user-4',
    userName: 'Arjun Kapoor',
    userAvatar: '/users/arjun.jpg',
    serviceId: 'serv-5', // AC Service & Repair
    rating: 5,
    comment: 'Excellent service! My AC is working perfectly now. The technician was very knowledgeable and fixed the issue quickly.',
    date: '2023-04-12',
    professionalId: 'prof-1' // Rahul Sharma
  },
  {
    id: 'rev-5',
    userId: 'user-5',
    userName: 'Sneha Joshi',
    userAvatar: '/users/sneha.jpg',
    serviceId: 'serv-5', // AC Service & Repair
    rating: 4,
    comment: 'Good service. The AC is working better now, but there\'s still a slight noise. The technician was professional though.',
    date: '2023-04-08',
    professionalId: 'prof-1' // Rahul Sharma
  },
  {
    id: 'rev-6',
    userId: 'user-6',
    userName: 'Karan Mehta',
    userAvatar: '/users/karan.jpg',
    serviceId: 'serv-3', // Haircut & Styling
    rating: 5,
    comment: 'Best haircut I\'ve had in a long time! The stylist understood exactly what I wanted and delivered perfectly.',
    date: '2023-04-14',
    professionalId: 'prof-3' // Amit Kumar
  },
  {
    id: 'rev-7',
    userId: 'user-7',
    userName: 'Pooja Sharma',
    userAvatar: '/users/pooja.jpg',
    serviceId: 'serv-1', // Facial
    rating: 5,
    comment: 'Amazing facial! My skin feels so refreshed and glowing. The therapist was very skilled and used great products.',
    date: '2023-04-11',
    professionalId: 'prof-2' // Priya Singh
  },
  {
    id: 'rev-8',
    userId: 'user-8',
    userName: 'Rohit Verma',
    userAvatar: '/users/rohit.jpg',
    serviceId: 'serv-9', // Plumber
    rating: 4,
    comment: 'Good service. Fixed the leaking tap quickly. Professional and courteous.',
    date: '2023-04-09',
    professionalId: 'prof-5' // Rajesh Verma
  }
];

export const getReviewsByServiceId = (serviceId: string) => {
  return reviews.filter(review => review.serviceId === serviceId);
};

export const getReviewsByProfessionalId = (professionalId: string) => {
  return reviews.filter(review => review.professionalId === professionalId);
};
