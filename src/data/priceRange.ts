import { PriceRange, createPriceRange } from "../models/priceRange";

export const mockPriceRangeData: PriceRange[] = [
  createPriceRange({ range: "$" }),
  createPriceRange({ range: "$$" }),
  createPriceRange({ range: "$$$" }),
  createPriceRange({ range: "$$$$" }),
];
