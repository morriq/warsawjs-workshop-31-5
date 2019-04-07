const { Router } = require('express');
const Event = require('../../models/Event');

const router = new Router();

router.get('/', (req, res, next) => {
  const date = req.query.date;
  // @todo range
  Event.find({}, (err, data) => {
    res.json({
      data: data.map((v) => ({
        ...v,
        id: v._id
      }))
    });
    next();
  });
});

module.exports = (app) => {
  app.use('/api/day', router);
};
