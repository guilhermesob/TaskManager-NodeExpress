// tests/tasks.test.js

const request = require('supertest');
const app = require('../app');

describe('GET /tasks', () => {
 it('should return a list of tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: 'Estudar Node.js', done: false },
      { id: 2, name: 'Desenvolver API', done: false },
    ]);
 });
});
