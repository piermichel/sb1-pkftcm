import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Ultimate Digital
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Buy and sell premium digital products, software, and services.
            Join thousands of creators monetizing their digital assets.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
              Start Selling
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-medium border border-purple-200 hover:border-purple-300 transition-colors">
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}