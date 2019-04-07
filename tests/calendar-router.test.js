const express = require('express');
const supertest = require('supertest');

const calendarRouter = require('../web/router/calendar-router');


let app;
beforeEach(() => {
  app = express();
  calendarRouter(app);
});

it('Testing root route', async () => {
  const response = await supertest(app)
    .get('/');

  expect(typeof response.body).toBe('object')
});
