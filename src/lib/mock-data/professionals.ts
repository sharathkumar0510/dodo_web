import { Professional } from '@/types';

export const professionals: Professional[] = [
  {
    id: 'prof-1',
    name: 'Rahul Sharma',
    avatar: '/professionals/rahul.jpg',
    rating: 4.9,
    totalJobs: 350,
    experience: 5,
    services: ['serv-5', 'serv-8'] // AC Repair, Electrician
  },
  {
    id: 'prof-2',
    name: 'Priya Singh',
    avatar: '/professionals/priya.jpg',
    rating: 4.8,
    totalJobs: 280,
    experience: 4,
    services: ['serv-1', 'serv-2'] // Facial, Waxing
  },
  {
    id: 'prof-3',
    name: 'Amit Kumar',
    avatar: '/professionals/amit.jpg',
    rating: 4.7,
    totalJobs: 420,
    experience: 6,
    services: ['serv-3', 'serv-4'] // Haircut, Massage
  },
  {
    id: 'prof-4',
    name: 'Neha Patel',
    avatar: '/professionals/neha.jpg',
    rating: 4.9,
    totalJobs: 310,
    experience: 5,
    services: ['serv-6', 'serv-7'] // Bathroom Cleaning, Pest Control
  },
  {
    id: 'prof-5',
    name: 'Rajesh Verma',
    avatar: '/professionals/rajesh.jpg',
    rating: 4.6,
    totalJobs: 250,
    experience: 4,
    services: ['serv-9'] // Plumber
  }
];

export const getProfessionalById = (id: string) => {
  return professionals.find(professional => professional.id === id);
};

export const getProfessionalsByServiceId = (serviceId: string) => {
  return professionals.filter(professional => professional.services.includes(serviceId));
};
