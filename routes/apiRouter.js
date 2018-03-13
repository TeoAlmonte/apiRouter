const express = require('express');
const router = express.Router();

require('../models/sandModel')

const mongoose = require('mongoose');
const Sand = mongoose.model('sands');
const db = mongoose.connect('mongodb://localhost/sand');

router.route('/')
  .get((req, res) => {
    Sand.find((err, sands) => {
      if(err) {
        console.log(err)
      } else
        res.json(sands)
    })
  })

module.exports = router;