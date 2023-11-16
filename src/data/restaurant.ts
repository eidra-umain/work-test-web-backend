import { Restaurant, createRestaurant } from '../models/restaurant';

export const mockRestaurantData: Restaurant[] = [
  createRestaurant('Waynes Coffee', 4.5, ['Coffee'], 'https://i.imgur.com/W4d883v.png', 30),
  createRestaurant('Oskars Tacos', 3.8, ['Taco´s'], 'https://i.imgur.com/tH0EvOh.png', 45),
  createRestaurant('Dawids Deli', 4.9, ['Fries', 'Burrito'], 'https://i.imgur.com/uqgCi8Y.png', 60),
  createRestaurant('Viktors Valmofrön & Potatis', 4.2, ['Pizza', 'Fries'], 'https://i.imgur.com/uqgCi8Y.png', 30),
  createRestaurant('Sebbes Slizes', 4.3, ['Pizza',], 'https://i.imgur.com/bobBnmk.png', 45),
  createRestaurant('Karls Korv (vegan)', 4.4, ['Breakfast'], 'https://i.imgur.com/AevtNco.png', 20),
  createRestaurant('Emils Elit-biffar', 4.5, ['Hamburger'], 'https://i.imgur.com/m3vGiUZ.png', 60),
];