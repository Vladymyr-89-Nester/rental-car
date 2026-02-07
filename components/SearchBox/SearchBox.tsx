import css from './SearchBox.module.css';
import Select, { SingleValue } from 'react-select';
import { customStyles, SelectOption } from '../StyleSelect/customStyles';
import { useQuery } from '@tanstack/react-query';
import { fetchCarBrands } from '@/lib/api/clientApi';
import { useFiltersStore } from '@/lib/store/filtersStore';
import { useCarsStore } from '@/lib/store/carsStore';

export default function SearchBox() {
  const {
    brand,
    rentalPrice,
    minMileage,
    maxMileage,
    setBrand,
    setRentalPrice,
    setMinMileage,
    setMaxMileage,
    setTrigerFetch,
    setActivFilters,
  } = useFiltersStore();
  const { resetCars } = useCarsStore();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['cars-brands'],
    queryFn: async () => fetchCarBrands(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <p className={css.error}>Loading filters...</p>;
  }

  if (isError) {
    return <p className={css.error}>Failed to load filters</p>;
  }

  const optionBrands = data?.map(car => ({ value: car, label: car })) || [];
  const optionPrices = [];
  for (let i = 10; i <= 100; i += 10) {
    optionPrices.push({ value: String(i), label: String(i) });
  }

  const handleSearch = () => {
    resetCars();
    setActivFilters();
    setTrigerFetch();
  };

  const handleBrand = (value: SingleValue<SelectOption>) => {
    setBrand(value ? value.value : null);
  };

  const handlePrice = (value: SingleValue<SelectOption>) => {
    setRentalPrice(value ? value.value : null);
  };

  const handleMinMileage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setMinMileage(value);
  };

  const handleMaxMileage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setMaxMileage(value);
  };

  const formatValueInput = (value: string) => {
    if (!value) return '';

    return Number(value).toLocaleString('en-US');
  };

  return (
    <form className={css.searchBox} action={handleSearch}>
      <label className={css.label} htmlFor='brand'>
        <span className={css.labelText}>Car brand</span>
        <Select<SelectOption, false>
          inputId='brand'
          instanceId='brand-select'
          styles={customStyles}
          placeholder='Choose a brand'
          isSearchable={false}
          isClearable={true}
          className={css.select}
          classNamePrefix='react-select'
          options={optionBrands}
          name='brand'
          onChange={handleBrand}
          value={brand ? { value: brand, label: brand } : null}
        />
      </label>
      <label className={css.label} htmlFor='price'>
        <span className={css.labelText}>Price/ 1 hour</span>
        <Select
          inputId='price'
          instanceId='price-select'
          styles={customStyles}
          placeholder='Choose a price'
          isSearchable={false}
          isClearable={true}
          className={css.select}
          classNamePrefix='react-select'
          options={optionPrices}
          name='rentalPrice'
          onChange={handlePrice}
          value={
            rentalPrice ? { value: rentalPrice, label: rentalPrice } : null
          }
        />
      </label>
      <label className={css.label} htmlFor='mileage'>
        <span className={css.labelText}>Сar mileage / km</span>
        <div className={css.inputWrapper}>
          <span className={css.placeholderFrom}>From</span>
          <input
            className={css.inputFrom}
            type='text'
            id='mileage'
            // placeholder='From'
            name='minMileage'
            onChange={handleMinMileage}
            value={minMileage ? formatValueInput(minMileage) : ''}
          />
          <span className={css.placeholderTo}>To</span>
          <input
            className={css.inputTo}
            type='text'
            id='mileage'
            // placeholder='To'
            name='maxMileage'
            onChange={handleMaxMileage}
            value={maxMileage ? formatValueInput(maxMileage) : ''}
          />
        </div>
      </label>
      <button className={css.searchBtn} type='submit'>
        Search
      </button>
    </form>
  );
}
