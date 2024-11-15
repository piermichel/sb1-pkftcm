import React from 'react';
import { Star, Users } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  users: number;
  creator: string;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  rating,
  users,
  creator
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{creator}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-1 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${price}</span>
          <div className="flex items-center gap-1 text-gray-500">
            <Users className="h-4 w-4" />
            <span className="text-sm">{users} users</span>
          </div>
        </div>
      </div>
    </div>
  );
}