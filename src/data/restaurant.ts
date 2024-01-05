import { Restaurant, createRestaurant } from "../models/restaurant";
import { getFilterIdByName } from "../services/FilterService";

export const mockRestaurantData: Restaurant[] = [
  createRestaurant({
    name: "Waynes Coffee",
    rating: 4.5,
    filterIds: [getFilterIdByName("Coffee")],
    image_url: "/images/coffee.png",
    delivery_time_minutes: 30,
  }),
  createRestaurant({
    name: "Oskars Tacos",
    rating: 3.8,
    filterIds: [getFilterIdByName("Taco´s")],
    image_url: "/images/taco.png",
    delivery_time_minutes: 45,
  }),
  createRestaurant({
    name: "Dawids Deli",
    rating: 4.9,
    filterIds: [getFilterIdByName("Fries"), getFilterIdByName("Burrito")],
    image_url: "/images/fries.png",
    delivery_time_minutes: 60,
  }),
  createRestaurant({
    name: "Viktors Valmofrön & Potatis",
    rating: 4.2,
    filterIds: [getFilterIdByName("Pizza"), getFilterIdByName("Fries")],
    image_url: "/images/pizza.png",
    delivery_time_minutes: 30,
  }),
  createRestaurant({
    name: "Sebbes Slizes",
    rating: 4.3,
    filterIds: [getFilterIdByName("Pizza")],
    image_url: "/images/pizza.png",
    delivery_time_minutes: 45,
  }),
  createRestaurant({
    name: "Karls Korv (vegan)",
    rating: 4.4,
    filterIds: [getFilterIdByName("Breakfast")],
    image_url: "/images/breakfast.png",
    delivery_time_minutes: 20,
  }),
  createRestaurant({
    name: "Emils Elit-biffar",
    rating: 4.5,
    filterIds: [getFilterIdByName("Hamburger")],
    image_url: "/images/hamburger.png",
    delivery_time_minutes: 60,
  }),
];
