const request = require("supertest");
const app = require("../app");

const BASE_URL = "/api/v1/users";
let TOKEN;

beforeAll(async () => {
  const user = {
    email: "jose@academlo.com",
    password: "12345",
  };

  const res = await request(app).post(`${BASE_URL}/login`).send(user);

  TOKEN = res.body.token;

  // console.log(TOKEN);
});

const user = {
  firstName: "Jose",
  lastName: "Perez",
  email: "jose2@academlo.com",
  password: "12345",
  celphone: "3214568592",
};
test("POST-> BASE_URL, should return statusCode 201, and res.body.firstName === user.firstName  ", async () => {
  const res = await request(app).post(BASE_URL).send(user);

  // console.log(res.body);s
  expect(res.statusCode).toBe(201);
  expect(res.body).toBeDefined();
  expect(res.body.firstName).toBe(user.firstName);
});

test("POST-> 'BASE_URL/LOGIN', should return status code 200, and res.body.user.email === user.email", async () => {
  const hits = {
    email: "jose2@academlo.com",
    password: "12345",
  };

  const res = await request(app).post(`${BASE_URL}/login`).send(hits);

  // expect(res.status).toBe(401);
  expect(res.status).toBe(200);
  expect(res.body).toBeDefined();
  expect(res.body.user).toBeDefined();
  expect(res.body.token).toBeDefined();
  expect(res.body.user.email).toBe(hits.email);
});
