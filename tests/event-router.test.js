const express = require('express');
const sinon = require('sinon');
const supertest = require('supertest');

const eventRouter = require('../web/router/event-router');
const Event = require('../models/Event');


let app;
beforeEach(() => {
  app = express();
  eventRouter(app);
});

it('Testing root route', async () => {
  const response = await supertest(app)
    .get('/');

  expect(response.body).toEqual(jasmine.any(Object))
});