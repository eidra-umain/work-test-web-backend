import { v4 as uuidv4 } from 'uuid'
import { PriceRange, createPriceRange } from '../models/priceRange'

export const mockPriceRangeData: PriceRange[] = [
  createPriceRange({ id: uuidv4(), range: '$' }),
  createPriceRange({ id: uuidv4(), range: '$$' }),
  createPriceRange({ id: uuidv4(), range: '$$$' }),
  createPriceRange({ id: uuidv4(), range: '$$$$' }),
]
