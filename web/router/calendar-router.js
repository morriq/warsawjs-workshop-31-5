const { Router } = require('express');

const router = new Router();

router.get('/', (req, res, next) => {
  res.json({ a: 1231 });
  next();
});

module.exports = (app) => {
  app.use('/api/calendar', router);
};
