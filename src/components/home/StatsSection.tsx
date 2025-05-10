import { Users, Star, Award, Clock } from 'lucide-react';

export default function StatsSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why choose DoDoServices?</h2>
          <p className="text-gray-300">Trusted by thousands of customers across India</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">12M+</div>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star size={48} className="text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">4.8</div>
            <p className="text-gray-300">Service Rating</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award size={48} className="text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
            <p className="text-gray-300">Verified Professionals</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock size={48} className="text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">1M+</div>
            <p className="text-gray-300">Service Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
