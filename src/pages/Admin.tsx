import React from 'react';
import { AdminBikeForm } from '../components/AdminBikeForm';
import { Bike } from '../types';

export function Admin() {
  const handleAddBike = (bikeData: Omit<Bike, 'id'>) => {
    // In a real app, this would make an API call to add the bike
    console.log('Adding new bike:', bikeData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New Bike</h2>
          <AdminBikeForm onSubmit={handleAddBike} />
        </div>
      </div>
    </div>
  );
}