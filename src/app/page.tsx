import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DoDoServices - Home Services at Your Doorstep",
  description: "Book trusted home services including cleaning, repairs, salon, and more at your doorstep. Professional service providers, transparent pricing, and hassle-free booking.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Services at Your Doorstep</h1>
          <p className="text-xl text-gray-600 mb-8">
            Book trusted professionals for cleaning, repairs, salon services, and more.
            Quality service, transparent pricing, and hassle-free booking.
          </p>
          <div className="mt-8">
            <button className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
              Book a Service
            </button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Cleaning & Pest Control</h3>
            <p className="text-gray-600 mb-4">Professional cleaning and pest control services for your home.</p>
            <button className="text-black font-medium hover:underline">Learn More →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">AC & Appliance Repair</h3>
            <p className="text-gray-600 mb-4">Expert repair services for all your home appliances.</p>
            <button className="text-black font-medium hover:underline">Learn More →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Salon & Spa Services</h3>
            <p className="text-gray-600 mb-4">Professional salon and spa services at your doorstep.</p>
            <button className="text-black font-medium hover:underline">Learn More →</button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black text-white rounded-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose DoDoServices?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-300">All our professionals are verified and trained.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-300">No hidden charges. Pay only for what you book.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hassle-Free Booking</h3>
              <p className="text-gray-300">Easy booking process and timely service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
