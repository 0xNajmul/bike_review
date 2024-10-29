import React from 'react';
import { Link } from 'react-router-dom';
import { Bike } from '../types';
import { Bike as BikeIcon } from 'lucide-react';

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  return (
    <Link to={`/bikes/${bike.id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          {bike.imageUrl ? (
            <img
              src={bike.imageUrl}
              alt={bike.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <BikeIcon className="w-16 h-16 text-gray-400" />
            </div>
          )}
          <div className="absolute top-0 right-0 bg-black/60 text-white px-3 py-1 m-2 rounded-full">
            {bike.category}
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{bike.name}</h3>
            <span className="text-lg font-semibold text-blue-600">
              ${bike.price.toLocaleString()}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{bike.brand}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Engine:</span>
              <span className="font-medium">{bike.engineCC}cc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Mileage:</span>
              <span className="font-medium">{bike.mileage} km/l</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Top Speed:</span>
              <span className="font-medium">{bike.topSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Weight:</span>
              <span className="font-medium">{bike.weight} kg</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}