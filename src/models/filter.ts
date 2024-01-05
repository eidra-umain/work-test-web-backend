import { v4 as uuidv4 } from 'uuid';

export type FilterName =
  | 'Coffee'
  | 'Taco´s'
  | 'Fries'
  | 'Pizza'
  | 'Breakfast'
  | 'Hamburger'
  | 'Burrito';

export type Filter = {
  id?: string;
  name: FilterName;
  image_url: string;
};

export function createFilter(filter: Filter): Filter {
  const { name, image_url } = filter;

  return {
    id: uuidv4(),
    name,
    image_url,
  };
}
