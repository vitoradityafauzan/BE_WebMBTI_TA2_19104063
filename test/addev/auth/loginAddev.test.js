const request = require("supertest");
const app = require("../../../app");

describe("POST /add3v/v1/login", () => {
  it("should response with 201 as status code", async () => {
    const email = "super2@test.co.id";
    const password = "4dminadmin";

    return request(app)
      .post("/add3v/v1/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            email: expect.any(String),
            token: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          })
        );
      });
  });

  it("should response with 404 as status code", async () => {
    const email = "test@mail.com";
    const password = "coba123";
    return request(app)
      .post("/add3v/v1/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          })
        );
      });
  });

  it("should response with 401 as status code", async () => {
    const email = "super2@test.co.id";
    const password = "inipassword";
    return request(app)
      .post("/add3v/v1/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
          })
        );
      });
  });
});
