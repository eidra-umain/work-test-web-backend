import { Filter, createFilter } from '../models/filter';

export const mockFilterData: Filter[] = [
  createFilter({
    name: 'Hamburger',
    image_url: '/images/hamburger.png',
  }),
  createFilter({
    name: 'Pizza',
    image_url: '/images/pizza.png',
  }),
  createFilter({
    name: 'Taco´s',
    image_url: '/images/taco.png',
  }),
  createFilter({
    name: 'Coffee',
    image_url: '/images/coffee.png',
  }),
  createFilter({
    name: 'Burrito',
    image_url: '/images/burrito.png',
  }),
  createFilter({
    name: 'Fries',
    image_url: '/images/fries.png',
  }),
  createFilter({
    name: 'Breakfast',
    image_url: '/images/breakfast.png',
  }),
];
