const request = require("supertest");
const app = require("../../../app");

describe('POST /api/v1/auth/login', () => {
  jest.setTimeout(30000)

  it("should response with 201 as status code", async () => {
    jest.setTimeout(200000)
    const email = "testuser2@test.co.id"
    const password = "qwerty"

    return request(app)
      .post('/api/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            email: expect.any(String),
            token: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
        )
      })
  });

  it("should response with 404 as status code", async () => {
    const email = "test@mail.com";
    const password = "inisalah";

    return request(app)
      .post("/api/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(404)
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          }),
        )
      })
  });

  it("should response with 401 as status code", async () => {
    const email = "testuser1@test.co.id";
    const password = "inipassword";

    return request(app)
      .post("/api/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(401)
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          }),
        );
      });
  });
});

