import { create } from 'zustand';
import { Car } from '@/types/cars';

interface CarsStore {
  cars: Car[];

  setCars: (cars: Car[]) => void;
  addCars: (cars: Car[]) => void;
  resetCars: () => void;
}

export const useCarsStore = create<CarsStore>(set => ({
  cars: [],

  setCars: cars => set({ cars }),

  addCars: cars => set(state => ({ cars: [...state.cars, ...cars] })),

  resetCars: () => set({ cars: [] }),
}));
