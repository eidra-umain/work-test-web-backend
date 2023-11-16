import { PriceRange } from '../models/priceRange';
import { mockPriceRangeData } from '../data/priceRange';

export function getPriceRangeById(id: string): PriceRange | undefined{
  return mockPriceRangeData.find((priceRange) => priceRange.id === id);
}

export function getAllPriceRanges(): PriceRange[]{
  return mockPriceRangeData;
}