import request from 'supertest';
import app from '../../index';

describe('get migrations API', () => {
  it('should return 200 for migrations', async () => {
    const response = await request(app).get('/api/migrations');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true)
  });
});