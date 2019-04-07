const express = require('express');

const { PORT } = require('./config/app-env');


const app = express();

require('./web/router/base-router')(app);
require('./web/router/calendar-router')(app);

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
