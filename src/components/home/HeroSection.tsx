import { Search, CheckCircle } from 'lucide-react';
import { useImages } from '@/context/ImageContext';
import DynamicImage from '@/components/common/DynamicImage';
import DynamicIcon from '@/components/common/DynamicIcon';

export default function HeroSection() {
  const { isLoading } = useImages();
  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Home services at your doorstep
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">
              Book trusted professionals for cleaning, repairs, salon services, and more. Quality service, transparent pricing, and hassle-free booking.
            </p>

            <div className="mt-8 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full border-2 border-black rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-black/5 text-lg"
                />
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
                <button className="absolute right-2 top-2 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="bg-green-50 text-green-700 rounded-full p-2">
                  {isLoading ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <DynamicIcon
                      iconId={12}
                      category="features"
                      size={20}
                      className="h-5 w-5"
                      fallbackIcon={<CheckCircle className="h-5 w-5" />}
                    />
                  )}
                </div>
                <span className="ml-2 text-gray-700">Verified Professionals</span>
              </div>

              <div className="flex items-center">
                <div className="bg-green-50 text-green-700 rounded-full p-2">
                  {isLoading ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <DynamicIcon
                      iconId={13}
                      category="features"
                      size={20}
                      className="h-5 w-5"
                      fallbackIcon={<CheckCircle className="h-5 w-5" />}
                    />
                  )}
                </div>
                <span className="ml-2 text-gray-700">Hassle-Free Booking</span>
              </div>

              <div className="flex items-center">
                <div className="bg-green-50 text-green-700 rounded-full p-2">
                  {isLoading ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <DynamicIcon
                      iconId={14}
                      category="features"
                      size={20}
                      className="h-5 w-5"
                      fallbackIcon={<CheckCircle className="h-5 w-5" />}
                    />
                  )}
                </div>
                <span className="ml-2 text-gray-700">Transparent Pricing</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-gray-200">
                  <DynamicImage
                    imageId={8}
                    type="background"
                    category="hero"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    fallbackUrl="/images/hero/cleaning.jpg"
                    fallbackAlt="Professional Cleaning Service"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gray-200">
                  <DynamicImage
                    imageId={10}
                    type="background"
                    category="hero"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    fallbackUrl="/images/hero/salon.jpg"
                    fallbackAlt="Professional Salon Service"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gray-200">
                  <DynamicImage
                    imageId={9}
                    type="background"
                    category="hero"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    fallbackUrl="/images/hero/repair.jpg"
                    fallbackAlt="Professional Repair Service"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-gray-200">
                  <DynamicImage
                    imageId={11}
                    type="background"
                    category="hero"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    fallbackUrl="/images/hero/massage.jpg"
                    fallbackAlt="Professional Massage Service"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
