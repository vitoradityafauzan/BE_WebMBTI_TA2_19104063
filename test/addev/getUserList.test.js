/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../app");

// Function for testing endpoint whoami
describe("GET /add3v/v1/alluser", () => {
  let accessToken, wrongToken;

  beforeEach(async () => {
    accessToken = await request(app).post("/add3v/v1/login").send({
      email: "super2@test.co.id",
      password: "4dminadmin",
    });

    wrongToken = await request(app).post("/add3v/v1/login").send({
      email: "admin1@test.co.id",
      password: "4dminadmin",
    });

    return accessToken, wrongToken;
  });

  // State what the response should be if status code 201
  it("should response with 201 as status code and res.json with list of users", async () => {
    // console.log(accessToken.body);
    return (
      request(app)
        // Requesting endpoint
        .get("/add3v/v1/alluser")
        .set("Authorization", `Bearer ${accessToken.body.token}`)
        .then((res) => {
          // Enpoint's responses expectation
          expect(res.statusCode).toBe(201);
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
        .get("/add3v/v1/alluser")
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
