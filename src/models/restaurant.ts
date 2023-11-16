import { v4 as uuidv4 } from 'uuid';

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filterIds: string[];
  image_url: string;
  delivery_time_minutes: number;
}

export function createRestaurant(name: string, rating: number, filterIds: string[], image_url: string, delivery_time_minutes: number): Restaurant {
  return {
    id: uuidv4(),
    name,
    rating,
    filterIds,
    image_url,
    delivery_time_minutes,
  };
}
