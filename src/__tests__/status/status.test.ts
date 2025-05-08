import request from 'supertest';
import app from '../../index';

describe('Status  Check API', () => {
  it('should return 200 and health info', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('updated_at');
    expect(response.body).toHaveProperty('dependencies');
    expect(response.body.dependencies).toHaveProperty('database');

    // Database checks
    const db = response.body.dependencies.database;
    expect(db).toHaveProperty('version');
    expect(db).toHaveProperty('max_connections');
    expect(db).toHaveProperty('opened_connections');

    // Type checks
    expect(typeof response.body.updated_at).toBe('string');
    expect(typeof db.version).toBe('string');
    expect(typeof db.max_connections).toBe('number');
    expect(typeof db.opened_connections).toBe('number');
  });
});