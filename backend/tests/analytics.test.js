const request = require('supertest');
const app = require('../src/app');

describe('Analytics Routes', () => {
    it('should fetch analytics data', async () => {
        const res = await request(app).get('/api/analytics/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('total');
        expect(res.body).toHaveProperty('positive');
        expect(res.body).toHaveProperty('negative');
        expect(res.body).toHaveProperty('neutral');
    });
});
