import React from 'react';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const products = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content with advanced AI algorithms. Perfect for marketers and content creators.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      users: 1234,
      creator: "AI Labs"
    },
    {
      title: "Social Media Analytics Suite",
      description: "Track and analyze your social media performance across all platforms in one dashboard.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      users: 2156,
      creator: "DataMetrics"
    },
    {
      title: "E-commerce Automation Tool",
      description: "Automate your e-commerce operations with powerful workflows and integrations.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      users: 892,
      creator: "ShopTech"
    },
    {
      title: "Premium Design Templates",
      description: "Access thousands of premium design templates for your projects.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      users: 3421,
      creator: "DesignPro"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of top-selling digital products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}