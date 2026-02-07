'use client';

import { CarsResponse } from '@/types/cars';
import css from './CarsList.module.css';
import { fetchCars } from '@/lib/api/clientApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useCarsStore } from '@/lib/store/carsStore';
import SearchBox from '../SearchBox/SearchBox';
import { Icon } from '../Icon/Icon';
import { useFiltersStore } from '@/lib/store/filtersStore';
import { useFavoritesStore } from '@/lib/store/favoritesStore';
import { InfinitySpin } from 'react-loader-spinner';

export default function CarsList() {
  const { cars, setCars, addCars } = useCarsStore();
  const {
    activBrand,
    activRentalPrice,
    activMinMileage,
    activMaxMileage,
    trigerFetch,
  } = useFiltersStore();
  const { setFavorite, favorites } = useFavoritesStore();

  const { fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery<CarsResponse>({
      queryKey: ['cars', trigerFetch],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const data = await fetchCars({
          limit: '12',
          page: String(pageParam),
          brand: activBrand ?? undefined,
          rentalPrice: activRentalPrice ?? undefined,
          minMileage: activMinMileage ?? undefined,
          maxMileage: activMaxMileage ?? undefined,
        });

        if (pageParam === 1) {
          setCars(data.cars);
        } else {
          addCars(data.cars);
        }

        return data;
      },

      getNextPageParam: lastPage => {
        const currentPage = Number(lastPage.page);

        return currentPage < lastPage.totalPages ? currentPage + 1 : undefined;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;

    setFavorite(id);
  };

  return (
    <div className='container'>
      <SearchBox />
      <ul className={css.carsList}>
        {isError && (
          <div className={css.errorWrapper}>
            <p className={css.error}>Failed to load cars</p>
          </div>
        )}
        {isLoading && !isError && (
          <div className={css.supportWrapper}>
            <InfinitySpin color='#3470ff' />
          </div>
        )}
        {cars.length === 0 && !isLoading && !isError ? (
          <div className={css.supportWrapper}>
            <li className={css.notFoundCarsItem}>
              <p className={css.notFoundText}>
                Sorry, no cars were found matching your request.
              </p>
            </li>
          </div>
        ) : (
          cars.map(car => (
            <li key={car.id} className={css.carItem}>
              <div className={css.favoriteWrapper}>
                <button
                  className={css.favoriteBtn}
                  type='button'
                  onClick={handleLike}
                  id={car.id}
                >
                  <Icon
                    id={
                      favorites.includes(car.id)
                        ? 'icon-like-active'
                        : 'icon-like'
                    }
                    className={css.favoriteIcon}
                  />
                </button>
                <Image
                  className={css.carImage}
                  src={car.img}
                  alt={car.brand}
                  width={276}
                  height={268}
                />
              </div>
              <div className={css.carHeader}>
                <h3
                  className={css.carTitle}
                  title={`${car.brand} | ${car.model} | ${car.year}`}
                >
                  {car.brand} <span className={css.carModel}>{car.model}</span>,{' '}
                  {car.year}
                </h3>
                <span className={css.carPrice}>${car.rentalPrice}</span>
              </div>
              <p className={css.carInfo}>
                {car.address} | {car.rentalCompany} | {car.type} |{' '}
                {car.mileage.toLocaleString('ru-RU')} km
              </p>
              <Link className={css.readMoreLink} href={`/catalog/${car.id}`}>
                Read more
              </Link>
            </li>
          ))
        )}
      </ul>
      {hasNextPage && (
        <button
          className={css.loadMoreBtn}
          type='button'
          onClick={handleLoadMore}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}
