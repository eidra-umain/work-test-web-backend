import { Filter, FilterName } from '../models/filter';
import { mockFilterData } from '../data/filter';

export function getAllFilters(): Filter[] {
  return mockFilterData;
}

export function getFilterById(id: string): Filter | undefined {
  return mockFilterData.find((filter) => filter.id === id);
}

export function getFilterIdByName(name: FilterName): string | undefined {
  return mockFilterData.find((filter) => filter.name === name)?.id;
}
