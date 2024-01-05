import { v4 as uuidv4 } from "uuid";

export type Restaurant = {
  id?: string;
  name: string;
  rating: number;
  filterIds: (string | undefined)[];
  image_url: string;
  delivery_time_minutes: number;
};

export function createRestaurant(restaurant: Restaurant): Restaurant {
  const { name, rating, filterIds, image_url, delivery_time_minutes } = restaurant;

  return {
    id: uuidv4(),
    name,
    rating,
    filterIds,
    image_url,
    delivery_time_minutes,
  };
}
