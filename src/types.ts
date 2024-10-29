export interface Bike {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  engineCC: number;
  mileage: number;
  topSpeed: number;
  weight: number;
  fuelCapacity: number;
  imageUrl: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}