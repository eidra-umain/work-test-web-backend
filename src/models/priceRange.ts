import { v4 as uuidv4 } from 'uuid';

export interface PriceRange {
  id: string;
  range: string;
}

export function createPriceRange(range: string): PriceRange {
  return {
    id: uuidv4(),
    range,
  };
}
