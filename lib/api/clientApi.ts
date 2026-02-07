import { Car, CarsResponse, FetchCarsParams } from '@/types/cars';
import { api } from './api';
import { CarsBrand } from '@/types/brand';

export const fetchCars = async (
  params: FetchCarsParams
): Promise<CarsResponse> => {
  const { data } = await api.get<CarsResponse>('/cars', { params });

  return data;
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get<Car>(`/cars/${id}`);

  return data;
};

export const fetchCarBrands = async (): Promise<CarsBrand> => {
  const { data } = await api.get<CarsBrand>('/brands');

  return data;
};
