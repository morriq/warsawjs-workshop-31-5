const { Router } = require('express');

const Event = require('../../models/Event');

const router = new Router();

router.post('/', (req, res, next) => {
  const event = new Event(req.body);

  event.save(req.body, (err, ev) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json({ id: ev._id });

    next();
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Event.deleteOne({ _id: id }, async (err, ev) => {
    if (err) {
      res.status(404).json({ id });
      return;
    }
    res.json({ id });

    next();
  });
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const f = await Event.updateOne({ _id: id, ...req.body });
  }
   catch (e) {
    console.log(e);
   }

  res.json({ id });
});

module.exports = (app) => {
  app.use('/api/event', router);
};
