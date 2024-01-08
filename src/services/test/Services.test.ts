import { mockFilterData } from '../../data/filter';
import { mockOpenStatusData } from '../../data/openStatus';
import { mockPriceRangeData } from '../../data/priceRange';
import { mockRestaurantData } from '../../data/restaurant';
import {
  getAllFilters,
  getFilterById,
  getFilterIdByName,
} from '../FilterService';
import {
  getAllOpenStatus,
  getOpenStatusByRestaurantId,
} from '../OpenStatusService';
import {
  getAllPriceRanges,
  getPriceRangeById,
  getPriceRangeIdByRange,
} from '../PriceRangeService';
import {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantByName,
} from '../RestaurantService';

describe('FilterService tests', () => {
  test('getAllFilters function returns all data', () => {
    expect(getAllFilters()).toHaveLength(mockFilterData.length);
  });

  test('getFilterById function test', () => {
    expect(getFilterById(mockFilterData[0]?.id ?? '')?.name).toBe('Hamburger');
    expect(getFilterById(mockFilterData[0]?.id ?? '')?.image_url).toBe(
      '/images/hamburger.png'
    );
    expect(getFilterById('')).toBeUndefined();
  });

  test('getFilterIdByName function test', () => {
    expect(getFilterIdByName('Hamburger')).toBe(mockFilterData[0].id);
    expect(getFilterIdByName('Taco´s')).toBe(mockFilterData[2].id);
  });
});

describe('OpenStatusService tests', () => {
  test('getAllOpenStatus function test', () => {
    expect(getAllOpenStatus()).toHaveLength(mockOpenStatusData.length);
  });

  test('getOpenStatusByRestaurantId function test', () => {
    expect(
      getOpenStatusByRestaurantId(
        getRestaurantByName('Waynes Coffee')?.id ?? ''
      )?.is_open
    ).toBeTruthy();
    expect(getOpenStatusByRestaurantId('')?.is_open).toBeUndefined();
  });
});
describe('PriceRangeService tests', () => {
  test('getAllPriceRanges function test', () => {
    expect(getAllPriceRanges()).toHaveLength(mockPriceRangeData.length);
  });

  test('getPriceRangeById function test', () => {
    expect(getPriceRangeById(mockPriceRangeData[0].id)?.range).toBe('$');
    expect(getPriceRangeById(mockPriceRangeData[1].id)?.range).toBe('$$');
    expect(getPriceRangeById(mockPriceRangeData[2].id)?.range).toBe('$$$');
    expect(getPriceRangeById(mockPriceRangeData[3].id)?.range).toBe('$$$$');
  });

  test('getPriceRangeIdByRange function test', () => {
    expect(getPriceRangeIdByRange('$')).toBe(mockPriceRangeData[0].id);
    expect(getPriceRangeIdByRange('$$')).toBe(mockPriceRangeData[1].id);
    expect(getPriceRangeIdByRange('$$$')).toBe(mockPriceRangeData[2].id);
    expect(getPriceRangeIdByRange('$$$$')).toBe(mockPriceRangeData[3].id);
  });
});
describe('RestaurantService tests', () => {
  test('getAllRestaurants function test', () => {
    expect(getAllRestaurants()).toHaveLength(mockRestaurantData.length);
  });

  test('getRestaurantById function test', () => {
    expect(getRestaurantById(mockRestaurantData[0].id ?? '')?.name).toBe(
      'Waynes Coffee'
    );
    expect(
      getRestaurantById(mockRestaurantData[3].id ?? '')?.filter_ids
    ).toHaveLength(2);
    expect(getRestaurantById(mockRestaurantData[6].id ?? '')?.image_url).toBe(
      '/images/hamburger.png'
    );
  });

  test('getRestaurantByName function test', () => {
    expect(getRestaurantByName('Emils Elit-biffar')?.id).toBe(
      mockRestaurantData[6].id
    );
  });
});
