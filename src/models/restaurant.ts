import { v4 as uuidv4 } from 'uuid'

export type Restaurant = {
  id?: string
  name: string
  rating: number
  filter_ids: (string | undefined)[]
  image_url: string
  delivery_time_minutes: number
  price_range_id: string
}

export function createRestaurant(restaurant: Restaurant): Restaurant {
  const {
    name,
    rating,
    filter_ids,
    image_url,
    delivery_time_minutes,
    price_range_id,
  } = restaurant

  return {
    id: uuidv4(),
    name,
    rating,
    filter_ids,
    image_url,
    delivery_time_minutes,
    price_range_id,
  }
}
