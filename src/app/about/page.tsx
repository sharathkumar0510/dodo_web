import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/" className="text-black hover:underline">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About DoDoServices</h1>
      
      <div className="max-w-3xl">
        <p className="text-lg text-gray-600 mb-6">
          DoDoServices is a leading platform for booking home services. We connect customers with skilled professionals for a wide range of services including cleaning, repairs, salon, and more.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to provide convenient, reliable, and high-quality home services at affordable prices. We aim to make everyday life easier for our customers while creating employment opportunities for skilled professionals.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
            <p className="text-gray-600">
              All our service providers undergo thorough background checks and skill assessments to ensure quality service.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">
              We believe in complete transparency. What you see is what you pay, with no hidden charges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Hassle-Free Booking</h3>
            <p className="text-gray-600">
              Our simple booking process allows you to schedule services at your convenience with just a few clicks.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              We stand by the quality of our services and offer a satisfaction guarantee on all bookings.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2023, DoDoServices started with a simple idea: to make home services accessible, affordable, and reliable for everyone. What began as a small startup has now grown into a trusted platform serving thousands of customers across multiple cities.
        </p>
        <p className="text-gray-600 mb-6">
          Our journey has been driven by a passion for solving everyday problems and a commitment to excellence. We continue to innovate and expand our services to meet the evolving needs of our customers.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-2">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Email:</strong> support@dodoservices.com
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Phone:</strong> +91 1234567890
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Address:</strong> 123, Main Street, Hyderabad, India
        </p>
      </div>
    </div>
  );
}
