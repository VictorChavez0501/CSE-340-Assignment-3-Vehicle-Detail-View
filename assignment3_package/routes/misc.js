const express = require('express');
const router = express.Router();

router.get('/error-test', (req, res, next) => {
  const err = new Error('Error intencional 500');
  err.status = 500;
  next(err);
});

module.exports = router;
