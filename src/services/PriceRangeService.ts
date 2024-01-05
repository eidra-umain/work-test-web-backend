import { PriceRange } from "../models/priceRange";
import { mockPriceRangeData } from "../data/priceRange";

export function getAllPriceRanges(): PriceRange[] {
  return mockPriceRangeData;
}

export function getPriceRangeById(id: string): PriceRange | undefined {
  return mockPriceRangeData.find((priceRange) => priceRange.id === id);
}

export function getPriceRangeIdByRange(range: string): string {
  return mockPriceRangeData.find((priceRange) => priceRange.range === range)?.id ?? mockPriceRangeData[0].id;
}
