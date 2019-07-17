const express = require('express');
const router = express.Router();
const db = require('../connection');
const main = require('./mail');


router.post('/mail', (req, res) => {

  main()
    .catch(console.error);
  return console.log('ok')
});






module.exports = router;