const express = require('express');
const router = express.Router();
const Mails = require('../controllers/Mails');

router
  .post('/', Mails.send)


module.exports = router;
