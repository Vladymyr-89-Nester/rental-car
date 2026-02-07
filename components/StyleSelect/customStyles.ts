import { StylesConfig } from 'react-select';

export interface SelectOption {
  value: string;
  label: string;
}

export const customStyles: StylesConfig<SelectOption, false> = {
  control: base => ({
    ...base,
    width: 204,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    boxShadow: 'none',
    border: '1px solid transparent',

    cursor: 'pointer',

    padding: 0,
    transition: 'border 250ms linear',
    '&:hover': {
      borderColor: '#0b44cd',
    },
    '&:focus-within': {
      borderColor: '#0b44cd',
    },
  }),

  valueContainer: base => ({
    ...base,
    padding: 0,
  }),

  input: base => ({
    ...base,
    margin: 0,
    padding: 0,
  }),

  indicatorsContainer: base => ({
    ...base,
    padding: 0,
  }),

  clearIndicator: base => ({
    ...base,
    padding: 0,
  }),

  menu: base => ({
    ...base,
    width: 204,
    marginTop: 4,
    borderRadius: 12,
    border: '1px solid #f7f7f7',
  }),

  menuList: base => ({
    ...base,
    padding: '14px 18px',
    marginRight: 8,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#8d929a',
    overflowY: 'auto',
  }),

  option: base => ({
    ...base,
    padding: '4px 0',
    borderRadius: 6,
    cursor: 'pointer',
  }),

  singleValue: base => ({
    ...base,
    margin: 0,
    padding: '12px 16px',
    color: '#101828',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
  }),

  placeholder: base => ({
    ...base,
    color: '#101828',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    margin: 0,
    padding: '12px 16px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
