'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ananya Gupta',
    avatar: '/testimonials/ananya.jpg',
    rating: 5,
    text: 'Excellent service! The bathroom cleaning was thorough and the professional was punctual and courteous. Will definitely book again.',
    service: 'Bathroom Cleaning'
  },
  {
    id: 2,
    name: 'Vikram Malhotra',
    avatar: '/testimonials/vikram.jpg',
    rating: 4,
    text: 'Great experience with the AC repair service. The technician was knowledgeable and fixed the issue quickly. My AC is working perfectly now.',
    service: 'AC Repair'
  },
  {
    id: 3,
    name: 'Meera Reddy',
    avatar: '/testimonials/meera.jpg',
    rating: 5,
    text: 'Amazing salon service at home! The stylist was professional and did a fantastic job with my haircut. Saved me a trip to the salon.',
    service: 'Women\'s Salon'
  },
  {
    id: 4,
    name: 'Arjun Kapoor',
    avatar: '/testimonials/arjun.jpg',
    rating: 5,
    text: 'The pest control service was very effective. The professional explained everything clearly and the results were immediate. Highly recommend!',
    service: 'Pest Control'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">What our customers say</h2>
          <p className="text-gray-600">Trusted by thousands of customers across India</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                          {testimonial.avatar ? (
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-black text-white text-xl font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.service}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18}
                            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-700">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
