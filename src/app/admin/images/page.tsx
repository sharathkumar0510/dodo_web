'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imageApi, ImageAsset } from '@/lib/api/mockImageApi';
import { useImages } from '@/context/ImageContext';

export default function AdminImagesPage() {
  const { images, refreshImages } = useImages();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState<ImageAsset[]>([]);
  const [editingImage, setEditingImage] = useState<ImageAsset | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    altText: '',
    type: '',
    category: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Get unique categories and types
  const categories = ['all', ...new Set(images.map(img => img.category || 'uncategorized'))];
  const types = ['all', ...new Set(images.map(img => img.type))];
  
  // Filter images based on selected type and category
  useEffect(() => {
    let filtered = [...images];
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(img => img.type === selectedType);
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }
    
    setFilteredImages(filtered);
  }, [images, selectedType, selectedCategory]);
  
  // Set form data when editing an image
  useEffect(() => {
    if (editingImage) {
      setFormData({
        name: editingImage.name,
        description: editingImage.description || '',
        url: editingImage.url,
        altText: editingImage.altText,
        type: editingImage.type,
        category: editingImage.category || '',
      });
    }
  }, [editingImage]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingImage) return;
    
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      await imageApi.updateImage(editingImage.id, {
        name: formData.name,
        description: formData.description,
        url: formData.url,
        altText: formData.altText,
        type: formData.type as ImageAsset['type'],
        category: formData.category,
      });
      
      // Refresh images
      await refreshImages();
      
      setMessage({
        type: 'success',
        text: 'Image updated successfully'
      });
      
      // Close edit form after a delay
      setTimeout(() => {
        setEditingImage(null);
        setMessage(null);
      }, 2000);
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to update image'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Image Management</h1>
        <Link href="/admin" className="text-black hover:underline">
          ← Back to Admin
        </Link>
      </div>
      
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border rounded-md px-3 py-2 w-40"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-2 w-40"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="border rounded-lg overflow-hidden bg-white"
            onClick={() => setEditingImage(image)}
          >
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={image.url}
                alt={image.altText}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm truncate">{image.name}</h3>
              <p className="text-xs text-gray-500 mt-1">
                Type: {image.type}
                {image.category && ` • Category: ${image.category}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Edit Modal */}
      {editingImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Edit Image</h2>
                <button 
                  onClick={() => setEditingImage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              {message && (
                <div className={`p-3 rounded-md mb-4 ${
                  message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image Preview
                  </label>
                  <div className="relative h-40 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={formData.url}
                      alt={formData.altText}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border rounded-md px-3 py-2 w-full"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border rounded-md px-3 py-2 w-full"
                    rows={2}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL
                  </label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    className="border rounded-md px-3 py-2 w-full"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    name="altText"
                    value={formData.altText}
                    onChange={handleInputChange}
                    className="border rounded-md px-3 py-2 w-full"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="border rounded-md px-3 py-2 w-full"
                    required
                  >
                    {types.filter(t => t !== 'all').map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="border rounded-md px-3 py-2 w-full"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setEditingImage(null)}
                    className="px-4 py-2 border rounded-md"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
