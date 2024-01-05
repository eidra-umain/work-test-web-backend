import { Restaurant, createRestaurant } from '../models/restaurant';
import { getFilterIdByName } from '../services/FilterService';

export const mockRestaurantData: Restaurant[] = [
  createRestaurant('Waynes Coffee', 4.5, [getFilterIdByName('Coffee')], 'https://i.imgur.com/W4d883v.png', 30),
  createRestaurant('Oskars Tacos', 3.8, [getFilterIdByName('Taco´s')], 'https://i.imgur.com/tH0EvOh.png', 45),
  createRestaurant('Dawids Deli', 4.9, [getFilterIdByName('Fries'), getFilterIdByName('Burrito')], 'https://i.imgur.com/uqgCi8Y.png', 60),
  createRestaurant('Viktors Valmofrön & Potatis', 4.2, [getFilterIdByName('Pizza'), getFilterIdByName('Fries')], 'https://i.imgur.com/uqgCi8Y.png', 30),
  createRestaurant('Sebbes Slizes', 4.3, [getFilterIdByName('Pizza')], 'https://i.imgur.com/bobBnmk.png', 45),
  createRestaurant('Karls Korv (vegan)', 4.4, [getFilterIdByName('Breakfast')], 'https://i.imgur.com/AevtNco.png', 20),
  createRestaurant('Emils Elit-biffar', 4.5, [getFilterIdByName('Hamburger')], 'https://i.imgur.com/m3vGiUZ.png', 60),
];