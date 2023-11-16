import { Restaurant } from '../models/restaurant';
import { mockRestaurantData } from '../data/restaurant';

export function getAllRestaurants(): Restaurant[]{
  return mockRestaurantData;
}

export function getRestaurantById(id: string): Restaurant | undefined{
  return mockRestaurantData.find((restaurant) => restaurant.id === id)
}
