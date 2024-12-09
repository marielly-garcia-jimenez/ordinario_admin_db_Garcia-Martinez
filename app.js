require('dotenv').config();
const express = require('express')
const app = express()
const routes = require('./src/routes');
const port = 3000

app.use(express.json())
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})