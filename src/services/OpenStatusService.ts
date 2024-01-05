import { OpenStatus } from '../models/openStatus';
import { mockOpenStatusData } from '../data/openStatus';

export function getAllOpenStatus(): OpenStatus[] {
  return mockOpenStatusData;
}

export function getOpenStatusByRestaurantId(
  restaurantId: string
): OpenStatus | undefined {
  return mockOpenStatusData.find(
    (status) => status.restaurant_id === restaurantId
  );
}
