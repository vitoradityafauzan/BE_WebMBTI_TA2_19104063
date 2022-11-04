const request = require("supertest");
const app = require("../../../app");
const { addevs } = require("../../../app/models");

describe("POST /add3v/v1/register", () => {
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
    const deleteAkun = await addevs.destroy({ where: { email: email } });

    return deleteAkun;
  });

  it("should response with 201 as status code", async () => {
    jest.setTimeout(20000);
    const username = `Admin ${makeUser()}`;
    email = `admin${makeUser()}@test.co.id`;
    const password = "qwerty";
    const is_super = "false";

    return request(app)
      .post("/add3v/v1/register")
      .set("Content-Type", "application/json")
      .send({ username, email, password, is_super })
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
    const email = "admin1@test.co.id";
    const password = "coba123";
    const is_super = "false";

    return request(app)
      .post("/add3v/v1/register")
      .set("Content-Type", "application/json")
      .send({ username, email, password, is_super })
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
    const username = `Admin ${makeUser()}`;
    email = `admin${makeUser()}@test.co.id`;
/*     const password = "coba123";
 */
    return request(app)
      .post("/add3v/v1/register")
      .set("Content-Type", "application/json")
      .send({ username, email/* , password */ })
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
