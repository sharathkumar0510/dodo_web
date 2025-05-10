import { useState } from 'react';
import { ServicePackage } from '@/types';
import { Clock, Check, Plus, Minus } from 'lucide-react';

interface ServicePackageCardProps {
  package: ServicePackage;
  onAddToCart: (packageId: string, quantity: number) => void;
}

export default function ServicePackageCard({ package: pkg, onAddToCart }: ServicePackageCardProps) {
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    onAddToCart(pkg.id, quantity);
  };
  
  const discountPercentage = pkg.discountedPrice && pkg.price 
    ? Math.round(((pkg.price - pkg.discountedPrice) / pkg.price) * 100) 
    : 0;
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="p-4 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{pkg.name}</h3>
            <div className="flex items-center mt-1 text-gray-600">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{pkg.duration} mins</span>
            </div>
          </div>
          
          {pkg.isPopular && (
            <div className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
              POPULAR
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mt-2">
          {pkg.description}
        </p>
      </div>
      
      <div className="p-4 bg-gray-50">
        <h4 className="font-medium text-sm mb-2">What's Included:</h4>
        <ul className="space-y-1">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border-t flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <span className="font-semibold text-lg">
              ₹{pkg.discountedPrice || pkg.price}
            </span>
            {pkg.discountedPrice && (
              <span className="text-gray-500 line-through text-sm ml-2">
                ₹{pkg.price}
              </span>
            )}
          </div>
          {discountPercentage > 0 && (
            <div className="text-green-600 text-sm font-medium">
              {discountPercentage}% off
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center border rounded-l-md overflow-hidden mr-2">
            <button 
              onClick={decrementQuantity}
              className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button 
              onClick={incrementQuantity}
              className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
