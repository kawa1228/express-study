'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  res.send(`title: ${req.params.title}`);
});

module.exports = router;
