const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/sandAPI');
const sand = require('../models/apiModel.js');

router.route('/')
  .get((req, res) => {
    sand.find(function(err, sand){
      if(err) {
        console.log(err)
      } else
        res.json(sand)
        console.log(res)
    })
  })

module.exports = router;