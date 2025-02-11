const request = require('supertest');
const app = require('../src/app');

describe('Review Routes', () => {
    let token;

    beforeAll(async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: "test@example.com",
            password: "password123"
        });
        token = res.body.token;
    });

    it('should create a new review', async () => {
        const res = await request(app)
            .post('/api/reviews/create')
            .set('Authorization', token)
            .send({ content: "This is a great product!" });

        expect(res.statusCode).toEqual(201);
        expect(res.body.review).toHaveProperty('sentiment');
    });

    it('should fetch all reviews', async () => {
        const res = await request(app).get('/api/reviews/');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
