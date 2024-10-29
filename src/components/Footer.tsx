import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Bike className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                BikeCatalog
              </span>
            </Link>
            <p className="mt-4 text-gray-500 max-w-md">
              Discover your perfect ride with our comprehensive motorcycle catalog. 
              Browse through detailed specifications and find the bike that matches your style.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Categories
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/?category=Sport" className="text-base text-gray-500 hover:text-gray-900">
                  Sport Bikes
                </Link>
              </li>
              <li>
                <Link to="/?category=Cruiser" className="text-base text-gray-500 hover:text-gray-900">
                  Cruisers
                </Link>
              </li>
              <li>
                <Link to="/?category=Adventure" className="text-base text-gray-500 hover:text-gray-900">
                  Adventure Bikes
                </Link>
              </li>
              <li>
                <Link to="/?category=Touring" className="text-base text-gray-500 hover:text-gray-900">
                  Touring Bikes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-base text-gray-400 text-center">
            © {currentYear} BikeCatalog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}