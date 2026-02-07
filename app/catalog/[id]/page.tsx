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

export default async function DetailsPage({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['car', id],
    queryFn: () => fetchCarById(id),
  });

  return (
    <section className='section'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewDetails />
      </HydrationBoundary>
    </section>
  );
}
