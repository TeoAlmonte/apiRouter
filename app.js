const express = require('express')
const mongoose = require('mongoose');

require('./models/sandModel')

const indexRouter = require('./routes/indexRouter')
const apiRouter = require('./routes/apiRouter')

const app = express();

app.use('/', indexRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`running on ${port}`)
})