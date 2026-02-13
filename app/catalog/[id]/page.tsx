import type { Metadata } from 'next';
import ViewDetails from '@/components/ViewDetails/ViewDetails';
import { fetchCarById } from '@/lib/api/serverApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const car = await fetchCarById(id);
    return {
      title: `${car.brand} — RentalCar`,
      description: `Rent ${car.brand} from our premium selection. Book your ideal car today.`,
      openGraph: {
        title: `${car.brand} — RentalCar`,
        description: `Rent ${car.brand} from our premium selection. Book your ideal car today.`,
        url: `https://rental-car-sooty.vercel.app/catalog/${id}`,
        siteName: 'RentalCar',
        images: [
          {
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: `${car.brand}`,
          },
        ],
        type: 'website',
      },
    };
  } catch {
    return {
      title: 'Car Details — RentalCar',
      description: 'View car details on RentalCar',
    };
  }
}

export default async function DetailsPage({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['car', id],
    queryFn: () => fetchCarById(id),
  });

  return (
    <section className='section'>
      <h2 className='visually-hidden'>Car Details</h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewDetails />
      </HydrationBoundary>
    </section>
  );
}
