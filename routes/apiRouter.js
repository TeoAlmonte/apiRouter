const express = require('express');
const router = express.Router();

require('../models/sandModel');

const mongoose = require('mongoose');
const Sand = mongoose.model('sands');
const db = mongoose.connect('mongodb://localhost/sand');

const sandController = require('../controllers/sandController')(Sand);

router.route('/')
  .get(sandController.get)
  .post(sandController.post)

router.use('/:id', (req, res, next) => {
  Sand.findById(req.params.id, (err, sand) => {
    if(err)
      res.status(500).send(err);
    else if(sand) {
      req.sand = sand;
      next();
    }
    else {
      res.status(404).send('not found');
    }
  })
})

router.route('/:id')
  .get((req, res) => {
    res.json(req.sand);
  })
  .put((req, res) => {
    req.sand.title = req.body.title
    req.sand.age = req.body.age
    req.sand.gang = req.body.gang
    req.sand.save((err) => {
      if(err)
        res.status(500).send(err);
      else {
        res.json(req.sand);
      }
    });
  })
  .patch((req, res) => {
    if(req.body.id)
      delete req.body._id
    for(let x in req.body) {
      req.sand[x] = req.body[x]
    }
    req.sand.save((err) => {
      if(err)
        res.status(500).send(err);
      else {
        res.json(req.sand);
      }
    });
  })
  .delete((req, res) => {
    req.sand.remove((err) => {
      if(err)
        res.status(500).send(err);
      else {
        res.status(204).send('Removed')
      }
    });
  })


module.exports = router;