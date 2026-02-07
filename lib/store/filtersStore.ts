import { create } from 'zustand';

interface FiltersStore {
  brand: string | null;
  rentalPrice: string | null;
  minMileage: string | null;
  maxMileage: string | null;
  trigerFetch: number;

  activBrand: string | null;
  activRentalPrice: string | null;
  activMinMileage: string | null;
  activMaxMileage: string | null;

  setBrand: (brand: string | null) => void;
  setRentalPrice: (rentalPrice: string | null) => void;
  setMinMileage: (minMileage: string | null) => void;
  setMaxMileage: (maxMileage: string | null) => void;
  resetFilters: () => void;
  setTrigerFetch: () => void;
  setActivFilters: () => void;
}

export const useFiltersStore = create<FiltersStore>(set => ({
  brand: null,
  rentalPrice: null,
  minMileage: null,
  maxMileage: null,
  trigerFetch: 0,

  activBrand: null,
  activRentalPrice: null,
  activMinMileage: null,
  activMaxMileage: null,

  setBrand: brand => set({ brand }),

  setRentalPrice: rentalPrice => set({ rentalPrice }),

  setMinMileage: minMileage => set({ minMileage }),

  setMaxMileage: maxMileage => set({ maxMileage }),

  resetFilters: () =>
    set({
      brand: null,
      rentalPrice: null,
      minMileage: null,
      maxMileage: null,
      activBrand: null,
      activRentalPrice: null,
      activMinMileage: null,
      activMaxMileage: null,
    }),

  setTrigerFetch: () => set(state => ({ trigerFetch: state.trigerFetch + 1 })),

  setActivFilters: () =>
    set(state => ({
      activBrand: state.brand,
      activRentalPrice: state.rentalPrice,
      activMinMileage: state.minMileage,
      activMaxMileage: state.maxMileage,
    })),
}));
