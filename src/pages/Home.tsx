import React, { useState } from 'react';
import { BikeCard } from '../components/BikeCard';
import { Search, SlidersHorizontal } from 'lucide-react';
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

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBikes = mockBikes.filter(bike => {
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || bike.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(mockBikes.map(bike => bike.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Available Bikes</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search bikes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative flex-1 md:flex-initial">
              <SlidersHorizontal className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map(bike => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No bikes found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}