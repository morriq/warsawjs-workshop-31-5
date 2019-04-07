const { Router } = require('express');
const dayjs = require('dayjs');

const router = new Router();

router.get('/', (req, res, next) => {
  res.json({
    data: [
      {
        id: 'guid',
        title: 'foo',
        description: 'foo',
        time: dayjs(),
        notification: false
      }
    ]
  });
  next();
});

module.exports = (app) => {
  app.use('/api/day', router);
};
