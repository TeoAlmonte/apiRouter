const express = require('express');
const bodyParser = require('body-parser')

const indexRouter = require('./routes/indexRouter');
const apiRouter = require('./routes/apiRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`running on ${port}`)
});