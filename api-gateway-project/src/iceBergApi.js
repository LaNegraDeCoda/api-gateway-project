const express = require('express');
const router = express.Router();

router.get('/api/stable', (req, res) => {
  res.json({ message: 'Stable endpoint response from iceberg API' });
});

module.exports = router;



