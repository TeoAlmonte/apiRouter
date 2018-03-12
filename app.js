const express = require('express')

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')

const app = express();

app.use('/', indexRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`running on ${port}`)
})