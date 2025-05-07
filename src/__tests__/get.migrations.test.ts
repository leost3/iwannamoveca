import request from 'supertest';
import app from '../index';

describe('Migrations API', () => {
  it('should return 200 and health info', async () => {
    const response = await request(app).get('/api/migrations');
    expect(response.status).toBe(200);
    expect(response.body.hasMigrations).toBe(true)
  });
});