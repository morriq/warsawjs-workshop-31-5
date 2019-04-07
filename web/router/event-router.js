const { Router } = require('express');

const Event = require('../../models/Event');

const router = new Router();


router.get('/', (req, res, next) => {
  Event.find(null, (data) => {
    res.json({
      data
    });
    next();
  });
});

router.post('/', (req, res, next) => {
  const event = new Event(req.body);

  event.save(req.body, (err, ev) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.sendStatus(201).json(ev);

    next();
  });
});

module.exports = (app) => {
  app.use('/api/event', router);
};
