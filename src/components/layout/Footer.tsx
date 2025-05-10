import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DoDoServices</h3>
            <p className="text-gray-600 mb-4">
              Professional home services at your doorstep. Quality service, transparent pricing, and hassle-free booking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cleaning-pest-control" className="text-gray-600 hover:text-black">
                  Cleaning & Pest Control
                </Link>
              </li>
              <li>
                <Link href="/services/ac-appliance-repair" className="text-gray-600 hover:text-black">
                  AC & Appliance Repair
                </Link>
              </li>
              <li>
                <Link href="/services/electrician-plumber-carpenter" className="text-gray-600 hover:text-black">
                  Electrician, Plumber & Carpenter
                </Link>
              </li>
              <li>
                <Link href="/services/womens-salon-spa" className="text-gray-600 hover:text-black">
                  Women's Salon & Spa
                </Link>
              </li>
              <li>
                <Link href="/services/mens-salon-massage" className="text-gray-600 hover:text-black">
                  Men's Salon & Massage
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: support@dodoservices.com
              </li>
              <li className="text-gray-600">
                Phone: +91 1234567890
              </li>
              <li className="text-gray-600">
                Address: 123, Main Street, Hyderabad, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} DoDoServices. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="/images/payment-methods.png" 
                alt="Payment Methods" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
