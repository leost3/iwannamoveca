import request from 'supertest';
import app from '../../index';

describe('post migrations API', () => {
  it('should return 200 and health info', async () => {
    const response = await request(app).post('/api/migrations');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true)
  });
});