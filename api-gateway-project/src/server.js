const express = require('express');
const icebergApi = require('./iceBergApi');
const luckyApi = require('./luckyApi');

const app = express();

app.use(icebergApi);
app.use(luckyApi);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Heyyy Queen! API Gateway running on port ${PORT}`);
});

