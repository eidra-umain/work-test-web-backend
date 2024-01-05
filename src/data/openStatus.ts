import { OpenStatus, createOpenStatus } from "../models/openStatus";
import { getRestaurantByName } from "../services/RestaurantService";
import { mockRestaurantData } from "./restaurant";

export const mockOpenStatusData: OpenStatus[] = [
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[0].name)?.id, is_open: true }),
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[1].name)?.id, is_open: true }),
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[2].name)?.id, is_open: false }),
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[3].name)?.id, is_open: true }),
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[4].name)?.id, is_open: false }),
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[5].name)?.id, is_open: true }),
  createOpenStatus({ restaurant_id: getRestaurantByName(mockRestaurantData[6].name)?.id, is_open: false }),
];
