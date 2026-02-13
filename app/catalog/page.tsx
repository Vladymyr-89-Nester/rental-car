import type { Metadata } from 'next';
import CarsList from '@/components/CarsList/CarsList';

export const metadata: Metadata = {
  title: 'Car Catalog — RentalCar',
  description:
    'Browse our extensive catalog of premium rental cars. Find the perfect vehicle for your needs.',
  openGraph: {
    title: 'Car Catalog — RentalCar',
    description:
      'Browse our extensive catalog of premium rental cars. Find the perfect vehicle for your needs.',
    url: 'https://rental-car-sooty.vercel.app/catalog',
    siteName: 'RentalCar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RentalCar - Car Catalog',
      },
    ],
    type: 'website',
  },
};

export default async function CatalogPage() {
  return (
    <section className='section'>
      <h2 className='visually-hidden'>Car Catalog</h2>
      <CarsList />
    </section>
  );
}
