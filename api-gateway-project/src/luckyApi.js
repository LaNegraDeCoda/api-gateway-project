const express = require('express');
const router = express.Router();

router.get('/api/poppy', (req, res) => {
  res.json({ message: 'Poppy endpoint response from lucky API' });
});

module.exports = router;


