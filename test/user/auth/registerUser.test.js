const request = require("supertest");
const app = require("../../../app");
const { users } = require("../../../app/models");

describe("POST /api/v1/auth/register", () => {
  // let email = 'testuser1@test.co.id';
  let email = "";

  function makeUser() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  }

  afterAll(async () => {
    jest.setTimeout(30000);
    const deleteAkun = await users.destroy({ where: { email: email } });

    return deleteAkun;
  });

  it("should response with 201 as status code", async () => {
    jest.setTimeout(20000);
    const username = `User ${makeUser()}`;
    email = `user${makeUser()}@test.co.id`;
    const password = "qwerty";

    return request(app)
      .post("/api/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ username, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            data: expect.any(Object),
          })
        );
      });
  });

  it("should response with 400 as status code", async () => {
    jest.setTimeout(20000);
    const username = "yehezkiel";
    const email = "testuser1@test.co.id";
    const password = "coba123";

    return request(app)
      .post("/api/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ username, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual(
          expect.objectContaining({
            status: expect.any(String),
            message: expect.any(String),
          })
        );
      });
  });

  it("should response with 422 as status code", async () => {
    jest.setTimeout(20000);
    const username = `User ${makeUser()}`;
    email = `user${makeUser()}@test.co.id`;
    /* const password = "coba123"; */
    
    return request(app)
      .post("/api/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ username, /* password, */ email })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
            status: expect.any(String),
            message: expect.any(String),
          })
        );
      });
  });
});

