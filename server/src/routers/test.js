const express = require('express');
const router = new express.Router();

router.get('/test', (req, res) => {
  try {
    console.log('SUCCESS');
    res.status(202).send({ message: 'Test successful' });
  } catch (error) {
    console.log('FAIL');
    res.status(400).send(error.toString());
  }
});

module.exports = router;
