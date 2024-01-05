import { Restaurant, createRestaurant } from "../models/restaurant";
import { getFilterIdByName } from "../services/FilterService";

export const mockRestaurantData: Restaurant[] = [
  createRestaurant({
    name: "Waynes Coffee",
    rating: 4.5,
    filterIds: [getFilterIdByName("Coffee")],
    image_url: "https://i.imgur.com/W4d883v.png",
    delivery_time_minutes: 30,
  }),
  createRestaurant({
    name: "Oskars Tacos",
    rating: 3.8,
    filterIds: [getFilterIdByName("Taco´s")],
    image_url: "https://i.imgur.com/tH0EvOh.png",
    delivery_time_minutes: 45,
  }),
  createRestaurant({
    name: "Dawids Deli",
    rating: 4.9,
    filterIds: [getFilterIdByName("Fries"), getFilterIdByName("Burrito")],
    image_url: "https://i.imgur.com/uqgCi8Y.png",
    delivery_time_minutes: 60,
  }),
  createRestaurant({
    name: "Viktors Valmofrön & Potatis",
    rating: 4.2,
    filterIds: [getFilterIdByName("Pizza"), getFilterIdByName("Fries")],
    image_url: "https://i.imgur.com/uqgCi8Y.png",
    delivery_time_minutes: 30,
  }),
  createRestaurant({
    name: "Sebbes Slizes",
    rating: 4.3,
    filterIds: [getFilterIdByName("Pizza")],
    image_url: "https://i.imgur.com/bobBnmk.png",
    delivery_time_minutes: 45,
  }),
  createRestaurant({
    name: "Karls Korv (vegan)",
    rating: 4.4,
    filterIds: [getFilterIdByName("Breakfast")],
    image_url: "https://i.imgur.com/AevtNco.png",
    delivery_time_minutes: 20,
  }),
  createRestaurant({
    name: "Emils Elit-biffar",
    rating: 4.5,
    filterIds: [getFilterIdByName("Hamburger")],
    image_url: "https://i.imgur.com/m3vGiUZ.png",
    delivery_time_minutes: 60,
  }),
];
