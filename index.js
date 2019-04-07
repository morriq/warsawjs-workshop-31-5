const express = require('express');

const { PORT } = require('./config/app-env');

const app = express();

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
