import { getFilterIdByName } from '../../services/FilterService';
import { getPriceRangeIdByRange } from '../../services/PriceRangeService';
import { Filter, createFilter } from '../filter';
import { Restaurant, createRestaurant } from '../restaurant';

describe('FilterModel tests', () => {
  test('createFilter function tests', () => {
    const mockFilterData: Filter = {
      name: 'Hamburger',
      image_url: '/images/hamburger.png',
    };

    expect(createFilter(mockFilterData).id).not.toBeNull();
  });
});

describe('RestaurantModel tests', () => {
  test('createRestaurant function tests', () => {
    const mockRestaurantData: Restaurant = {
      name: 'Waynes Coffee',
      rating: 4.5,
      filter_ids: [getFilterIdByName('Coffee')],
      image_url: '/images/coffee.png',
      delivery_time_minutes: 30,
      price_range_id: getPriceRangeIdByRange('$'),
    };

    expect(createRestaurant(mockRestaurantData).id).not.toBeNull();
  });
});
