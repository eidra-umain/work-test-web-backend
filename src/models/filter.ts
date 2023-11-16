import { v4 as uuidv4 } from 'uuid';

export interface Filter {
  id: string;
  name: string;
  image_url: string;
}

export function createFilter(name: string, image_url: string): Filter {
  return {
    id: uuidv4(),
    name,
    image_url,
  };
}
