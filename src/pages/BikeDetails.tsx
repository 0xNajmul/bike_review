import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bike as BikeIcon } from 'lucide-react';
import { Bike } from '../types';

const mockBikes: Bike[] = [
  {
    id: '1',
    name: 'Ninja ZX-10R',
    brand: 'Kawasaki',
    price: 15999,
    category: 'Sport',
    engineCC: 998,
    mileage: 15,
    topSpeed: 299,
    weight: 207,
    fuelCapacity: 17,
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2940',
    description: 'The ultimate supersport bike with racing DNA. Features advanced electronics and aggressive styling.',
  },
  {
    id: '2',
    name: 'Street Triple RS',
    brand: 'Triumph',
    price: 12500,
    category: 'Naked',
    engineCC: 765,
    mileage: 20,
    topSpeed: 260,
    weight: 166,
    fuelCapacity: 15,
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=2940',
    description: 'Perfect balance of power and agility. A street fighter with premium components.',
  },
  {
    id: '3',
    name: 'R 1250 GS Adventure',
    brand: 'BMW',
    price: 20450,
    category: 'Adventure',
    engineCC: 1254,
    mileage: 19,
    topSpeed: 220,
    weight: 268,
    fuelCapacity: 30,
    imageUrl: 'https://images.unsplash.com/photo-1635073943212-f5f3223dbdb9?auto=format&fit=crop&q=80&w=2940',
    description: 'The ultimate adventure motorcycle. Ready to tackle any terrain with supreme comfort.',
  },
  {
    id: '4',
    name: 'Panigale V4',
    brand: 'Ducati',
    price: 23195,
    category: 'Sport',
    engineCC: 1103,
    mileage: 13,
    topSpeed: 299,
    weight: 175,
    fuelCapacity: 16,
    imageUrl: 'https://images.unsplash.com/photo-1568708167243-438efa4363a0?auto=format&fit=crop&q=80&w=2940',
    description: 'Pure Italian racing excellence. MotoGP technology for the street.',
  },
  {
    id: '5',
    name: 'Gold Wing Tour',
    brand: 'Honda',
    price: 28500,
    category: 'Touring',
    engineCC: 1833,
    mileage: 20,
    topSpeed: 180,
    weight: 390,
    fuelCapacity: 21,
    imageUrl: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=2940',
    description: 'The ultimate touring machine. Luxury and comfort for long-distance adventures.',
  },
  {
    id: '6',
    name: 'Fat Bob 114',
    brand: 'Harley-Davidson',
    price: 19999,
    category: 'Cruiser',
    engineCC: 1868,
    mileage: 18,
    topSpeed: 160,
    weight: 306,
    fuelCapacity: 13.6,
    imageUrl: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=2940',
    description: 'Aggressive styling meets powerful performance. A modern take on the classic cruiser.',
  },
  {
    id: '7',
    name: 'MT-09 SP',
    brand: 'Yamaha',
    price: 11299,
    category: 'Naked',
    engineCC: 890,
    mileage: 22,
    topSpeed: 250,
    weight: 190,
    fuelCapacity: 14,
    imageUrl: 'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&q=80&w=2940',
    description: 'Dark side of Japan. Premium suspension and aggressive naked bike styling.',
  },
  {
    id: '8',
    name: 'Multistrada V4',
    brand: 'Ducati',
    price: 24695,
    category: 'Adventure',
    engineCC: 1158,
    mileage: 18,
    topSpeed: 250,
    weight: 243,
    fuelCapacity: 22,
    imageUrl: 'https://images.unsplash.com/photo-1632548260498-b7246fa466ea?auto=format&fit=crop&q=80&w=2940',
    description: 'Four bikes in one. Sport, touring, enduro, and urban modes for any adventure.',
  },
  {
    id: '9',
    name: 'Rebel 1100',
    brand: 'Honda',
    price: 9299,
    category: 'Cruiser',
    engineCC: 1084,
    mileage: 21,
    topSpeed: 180,
    weight: 223,
    fuelCapacity: 13.6,
    imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=2940',
    description: 'Modern cruiser with a sporty edge. Perfect blend of performance and style.',
  },
  {
    id: '10',
    name: 'S 1000 RR',
    brand: 'BMW',
    price: 16995,
    category: 'Sport',
    engineCC: 999,
    mileage: 16,
    topSpeed: 299,
    weight: 197,
    fuelCapacity: 16.5,
    imageUrl: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=2940',
    description: 'German engineering meets racing performance. Cutting-edge technology and pure speed.',
  }
];

export function BikeDetails() {
  const { id } = useParams();
  const bike = mockBikes.find(b => b.id === id);

  if (!bike) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Bike not found</h2>
          <Link to="/" className="mt-4 text-blue-600 hover:text-blue-800">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to listings
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 lg:h-full">
              {bike.imageUrl ? (
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <BikeIcon className="w-24 h-24 text-gray-400" />
                </div>
              )}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full">
                {bike.category}
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{bike.name}</h1>
                <p className="text-xl text-blue-600 font-semibold">${bike.price.toLocaleString()}</p>
                <p className="text-gray-600 mt-2">{bike.brand}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Engine</h3>
                  <p className="mt-1 text-lg font-medium">{bike.engineCC}cc</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Mileage</h3>
                  <p className="mt-1 text-lg font-medium">{bike.mileage} km/l</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Top Speed</h3>
                  <p className="mt-1 text-lg font-medium">{bike.topSpeed} km/h</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                  <p className="mt-1 text-lg font-medium">{bike.weight} kg</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Fuel Capacity</h3>
                  <p className="mt-1 text-lg font-medium">{bike.fuelCapacity} L</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600">{bike.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}