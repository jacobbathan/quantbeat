const express = require('express');
const router = new express.Router();

router.get('/test', (req, res) => {
  try {
    console.log('SUCCESS');
    res.header('Content-type', 'text/html');
    res.header('Content-Length', '500000');
    res.status(200).send({ message: 'Test successful' });
  } catch (error) {
    console.log('FAIL');
    res.status(400).send(error.toString());
  }
});

module.exports = router;
