const express = require('express');
const router = express.Router();
const Gifts = require('../controllers/Gifts');

router
  .get('/', Gifts.read)
  .post('/', Gifts.create)
  .get('/:id', Gifts.read)
  .delete('/:id', Gifts.delete);


module.exports = router;
