const express = require('express');
const supertest = require('supertest');
const Ajv = require('Ajv');

const dayRouter = require('../web/router/day-router');


let app;
beforeEach(() => {
  app = express();
  dayRouter(app);
});

it('Testing root route', async () => {
  const response = await supertest(app)
    .get('/');

  expect(response.body).toEqual(jasmine.any(Object))
});

it('responses with valid schema', async () => {
  const response = await supertest(app)
    .get('/api/day');
  const ajv = new Ajv();

  const schema = require('../docs/schemas/day.scheme');
  const validate = ajv.compile(schema);

  expect(validate(response.body)).toBeTruthy();
});
