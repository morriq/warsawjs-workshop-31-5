const { Router } = require('express');

const router = new Router();

router.get('/', (req, res, next) => {
  res.end('Hello!');
  next();
});

module.exports = router;
