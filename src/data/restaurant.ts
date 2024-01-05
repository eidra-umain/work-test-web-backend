import { Restaurant, createRestaurant } from "../models/restaurant";
import { getFilterIdByName } from "../services/FilterService";
import { getPriceRangeIdByRange } from "../services/PriceRangeService";

export const mockRestaurantData: Restaurant[] = [
  createRestaurant({
    name: "Waynes Coffee",
    rating: 4.5,
    filter_ids: [getFilterIdByName("Coffee")],
    image_url: "/images/coffee.png",
    delivery_time_minutes: 30,
    price_range_id: getPriceRangeIdByRange("$"),
  }),
  createRestaurant({
    name: "Oskars Tacos",
    rating: 3.8,
    filter_ids: [getFilterIdByName("Taco´s")],
    image_url: "/images/taco.png",
    delivery_time_minutes: 45,
    price_range_id: getPriceRangeIdByRange("$$"),
  }),
  createRestaurant({
    name: "Dawids Deli",
    rating: 4.9,
    filter_ids: [getFilterIdByName("Fries"), getFilterIdByName("Burrito")],
    image_url: "/images/fries.png",
    delivery_time_minutes: 60,
    price_range_id: getPriceRangeIdByRange("$$$"),
  }),
  createRestaurant({
    name: "Viktors Valmofrön & Potatis",
    rating: 4.2,
    filter_ids: [getFilterIdByName("Pizza"), getFilterIdByName("Fries")],
    image_url: "/images/pizza.png",
    delivery_time_minutes: 30,
    price_range_id: getPriceRangeIdByRange("$$"),
  }),
  createRestaurant({
    name: "Sebbes Slizes",
    rating: 4.3,
    filter_ids: [getFilterIdByName("Pizza")],
    image_url: "/images/pizza.png",
    delivery_time_minutes: 45,
    price_range_id: getPriceRangeIdByRange("$"),
  }),
  createRestaurant({
    name: "Karls Korv (vegan)",
    rating: 4.4,
    filter_ids: [getFilterIdByName("Breakfast")],
    image_url: "/images/breakfast.png",
    delivery_time_minutes: 20,
    price_range_id: getPriceRangeIdByRange("$$$$"),
  }),
  createRestaurant({
    name: "Emils Elit-biffar",
    rating: 4.5,
    filter_ids: [getFilterIdByName("Hamburger")],
    image_url: "/images/hamburger.png",
    delivery_time_minutes: 60,
    price_range_id: getPriceRangeIdByRange("$$$"),
  }),
];
