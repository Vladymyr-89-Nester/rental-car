'use client';

import css from './ViewDetails.module.css';
import { fetchCarById } from '@/lib/api/clientApi';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Icon } from '../Icon/Icon';
import BookingForm from '../BookingForm/BookingForm';
import { InfinitySpin } from 'react-loader-spinner';

export default function ViewDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['car', id],
    queryFn: () => fetchCarById(id),
  });

  if (isLoading) {
    return (
      <div className={css.supportWrapper}>
        <InfinitySpin color='#3470ff' />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={css.errorWrapper}>
        <p className={css.errorText}>Failed to load car details</p>
      </div>
    );
  }

  return (
    <div className={`container ${css.viewDetailsWrapper}`}>
      {data && (
        <div>
          <Image
            className={css.imageDetails}
            src={data?.img}
            alt={data?.brand}
            width={640}
            height={512}
            priority
          />
          <BookingForm />
        </div>
      )}
      <div className={css.informationWrapper}>
        <h3 className={css.title}>
          {data?.brand} {data?.model}, {data?.year}
        </h3>
        <p className={css.location}>
          <Icon id='icon-location' className={css.iconLocation} />
          <span className={css.address}>{data?.address}</span> Mileage:{' '}
          {data?.mileage.toLocaleString('ru-RU')}
        </p>
        <span className={css.price}>${data?.rentalPrice}</span>
        <p className={css.description}>{data?.description}</p>
        <h4 className={css.infoTitle}>Rental Conditions:</h4>
        <ul className={css.infoList}>
          {data?.rentalConditions.map(item => (
            <li className={css.infoItem} key={item}>
              <Icon id='icon-check-circle' className={css.icon} />
              <p className={css.infoText}>{item}</p>
            </li>
          ))}
        </ul>
        <h4 className={css.infoTitle}>Car Specifications:</h4>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <Icon id='icon-calendar' className={css.icon} />
            <p className={css.infoText}>Year: {data?.year}</p>
          </li>
          <li className={css.infoItem}>
            <Icon id='icon-car' className={css.icon} />
            <p className={css.infoText}>Type: {data?.type}</p>
          </li>
          <li className={css.infoItem}>
            <Icon id='icon-fuel-pump' className={css.icon} />
            <p className={css.infoText}>
              Fuel Consumption: {data?.fuelConsumption}
            </p>
          </li>
          <li className={css.infoItem}>
            <Icon id='icon-gear' className={css.icon} />
            <p className={css.infoText}>Engine Size: {data?.engineSize}</p>
          </li>
        </ul>
        <h4 className={css.infoTitle}>Accessories and functionalities:</h4>
        <ul>
          {data?.accessories.map(item => (
            <li className={css.infoItem} key={item}>
              <Icon id='icon-check-circle' className={css.icon} />
              <p className={css.infoText}>{item}</p>
            </li>
          ))}
          {data?.functionalities.map(item => (
            <li className={css.infoItem} key={item}>
              <Icon id='icon-check-circle' className={css.icon} />
              <p className={css.infoText}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
