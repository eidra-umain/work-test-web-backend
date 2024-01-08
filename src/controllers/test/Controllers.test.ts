import app from '../../app';
import request from 'supertest';
import { mockFilterData } from '../../data/filter';
import { mockRestaurantData } from '../../data/restaurant';
import { mockPriceRangeData } from '../../data/priceRange';

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

describe('GET /api/filter', () => {
  test('returns status code 200 and all filters', async () => {
    const res = await request(app).get('/api/filter');
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
    expect(res.body.filters).toHaveLength(mockFilterData.length);
  });
});

describe('GET /api/filter/:id', () => {
  test('returns status code 200 and specific filter', async () => {
    const res = await request(app).get(`/api/filter/${mockFilterData[0].id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
  });

  test('returns status code 404 and error json if id does not exist', async () => {
    const res = await request(app).get(`/api/filter/random-id`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toStrictEqual({ error: true, reason: 'Filter not found' });
  });
});

describe('GET /api/open/:id', () => {
  test('returns status code 200 and specific filter', async () => {
    const res = await request(app).get(`/api/open/${mockRestaurantData[0].id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
  });

  test('returns status code 404 and error json if id does not exist', async () => {
    const res = await request(app).get(`/api/open/random-id`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toStrictEqual({
      error: true,
      reason: 'Open status not found',
    });
  });
});

describe('GET /api/price-range', () => {
  test('returns status code 200 and all price-ranges', async () => {
    const res = await request(app).get('/api/price-range');
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
    expect(res.body).toHaveLength(mockPriceRangeData.length);
  });
});

describe('GET /api/price-range/:id', () => {
  test('returns status code 200 and specific price-range from id', async () => {
    const res = await request(app).get(
      `/api/price-range/${mockPriceRangeData[0].id}`
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
  });

  test('returns status code 404 and error json if id does not exist', async () => {
    const res = await request(app).get(`/api/price-range/random-id`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toStrictEqual({
      error: true,
      reason: 'Price range not found',
    });
  });
});

describe('GET /api/restaurants', () => {
  test('returns status code 200 and all restaurants', async () => {
    const res = await request(app).get('/api/restaurants');
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
    expect(res.body.restaurants).toHaveLength(mockRestaurantData.length);
  });
});

describe('GET /api/restaurants/:id', () => {
  test('returns status code 200 and specific restaurants from id', async () => {
    const res = await request(app).get(
      `/api/restaurants/${mockRestaurantData[0].id}`
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toBeUndefined();
  });

  test('returns status code 404 and error json if id does not exist', async () => {
    const res = await request(app).get(`/api/restaurants/random-id`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toStrictEqual({
      error: true,
      reason: 'Restaurant not found',
    });
  });
});
