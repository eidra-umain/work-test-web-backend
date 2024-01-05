import { Filter, createFilter } from '../models/filter';

export const mockFilterData: Filter[] = [
  createFilter({
    name: 'Hamburger',
    image_url: '',
  }),
  createFilter({
    name: 'Pizza',
    image_url: 'https://i.imgur.com/bobBnmk.png',
  }),
  createFilter({
    name: 'Taco´s',
    image_url: 'https://i.imgur.com/tH0EvOh.png',
  }),
  createFilter({
    name: 'Coffee',
    image_url: 'https://i.imgur.com/W4d883v.png',
  }),
  createFilter({
    name: 'Burrito',
    image_url: 'https://i.imgur.com/B83zjpk.png',
  }),
  createFilter({
    name: 'Fries',
    image_url: 'https://i.imgur.com/uqgCi8Y.png',
  }),
  createFilter({
    name: 'Breakfast',
    image_url: 'https://i.imgur.com/AevtNco.png',
  }),
];
