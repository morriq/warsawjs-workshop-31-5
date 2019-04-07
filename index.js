const express = require('express');

const { PORT } = require('./config/app-env');
const baseRouter = require('./web/router/base');


const app = express();

app.use(baseRouter);

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
