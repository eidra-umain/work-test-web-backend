import { OpenStatus } from '../models/openStatus';
import { mockOpenStatusData } from '../data/openStatus';

export function getOpenStatusByRestaurantId(restaurantId: string): OpenStatus | undefined {
  return mockOpenStatusData.find((status) => status.restaurant_id === restaurantId);
}

export function getAllOpenStatus(): OpenStatus[] {
  return mockOpenStatusData;
}