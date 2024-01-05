export type PriceRange = {
  id: string
  range: string
}

export function createPriceRange(priceRange: PriceRange): PriceRange {
  const { id, range } = priceRange

  return {
    id,
    range,
  }
}
