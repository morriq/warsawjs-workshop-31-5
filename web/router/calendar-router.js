const { Router } = require('express');
const dayjs = require('dayjs');

const router = new Router();

router.get('/', (req, res, next) => {
  const date = new Date(req.query.month);

  const from = dayjs(date).startOf('month').startOf('week');
  const calendarWidth = 7;
  const calendarHeight = 6;

  const days = Array.from({ length: calendarWidth * calendarHeight })
    .map((_, index) => from.add(index + 1, 'day').toString())
    .map((date) => ({
      date,
      events: []
    }));

  res.json({
    data: days
  });
  next();
});

module.exports = (app) => {
  app.use('/api/calendar', router);
};
