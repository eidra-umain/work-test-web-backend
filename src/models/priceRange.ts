import { v4 as uuidv4 } from "uuid";

export type PriceRange = {
  id?: string;
  range: string;
};

export function createPriceRange(priceRange: PriceRange): PriceRange {
  const { range } = priceRange;

  return {
    id: uuidv4(),
    range,
  };
}
