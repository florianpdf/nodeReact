const express = require('express');
const router = express.Router();
const gifts = require('../data/gifts.json');

// Use this route to get all the gifts
router.get('/', (req, res) => {
  return res.json(gifts);
});

// You have two more routes to implement:
// One to CREATE a new gift
// One to DELETE a gift

module.exports = router;
