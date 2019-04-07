const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./db');
const { PORT } = require('./config/app-env');


const app = express();

app.use(bodyParser());

require('./web/router/base-router')(app);
require('./web/router/calendar-router')(app);
require('./web/router/day-router')(app);
require('./web/router/event-router')(app);

(async () => {
  await connect();

  app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
})();
