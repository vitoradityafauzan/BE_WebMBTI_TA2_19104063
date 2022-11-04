/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../app");

// Function for testing endpoint whoami
describe("GET /add3v/v1/whoami", () => {
  let accessToken, wrongToken;

  beforeEach(async () => {
    accessToken = await request(app).post("/add3v/v1/login").send({
      email: "super2@test.co.id",
      password: "4dminadmin",
    });

    wrongToken = await request(app).post("/api/v1/auth/login").send({
      email: "testuser2@test.co.id",
      password: "qwerty",
    });

    return accessToken, wrongToken;
  });

  // State what the response should be if status code 200
  it("should response with 200 as status code and res.json with user's info", async () => {
    // console.log(accessToken.body);
    return (
      request(app)
        // Requesting endpoint
        .get("/add3v/v1/whoami")
        .set("Authorization", `Bearer ${accessToken.body.token}`)
        .then((res) => {
          // Enpoint's responses expectation
          expect(res.statusCode).toBe(200);
          expect(res.body).toEqual(
            expect.objectContaining({
              ...res.body,
            })
          );
        })
    );
  });

  it("should response with 401 as status code and res.json with message Unauthorized", async () => {

    return (
      request(app)
        // Requesting endpoint
        .get("/add3v/v1/whoami")
        .set("Authorization", `${wrongToken.body.token}`)
        .then((res) => {
          // Enpoint's responses expectation
          expect(res.statusCode).toBe(401);
          expect(res.body).toEqual(
            expect.objectContaining({
              message: expect.any(String),
            })
          );
        })
    );
  });
});
