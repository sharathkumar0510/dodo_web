'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/" className="text-black hover:underline">
          ← Back to Home
        </Link>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-1">Thank you for contacting us!</h3>
              <p>We have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/5"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Customer Support</h3>
                <p className="text-gray-600">support@dodoservices.com</p>
                <p className="text-gray-600">+91 1234567890</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Business Inquiries</h3>
                <p className="text-gray-600">business@dodoservices.com</p>
                <p className="text-gray-600">+91 9876543210</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Office Address</h3>
                <p className="text-gray-600">
                  123, Main Street<br />
                  Hyderabad, 500001<br />
                  India
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Working Hours</h3>
                <p className="text-gray-600">
                  Monday to Saturday: 9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
