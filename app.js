const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('welcome to API test');
})

const apiRouter = express.Router();

apiRouter.route('/api')
  .get((req, res) => {
    console.log('herllo')
  })


const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`running on ${port}`)
})