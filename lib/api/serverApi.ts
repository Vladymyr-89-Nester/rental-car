import { Car, CarsResponse, FetchCarsParams } from '@/types/cars';
import { api } from './api';

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
