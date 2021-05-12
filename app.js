const express = require('express')
const app = express()
const cors = require('cors');
var server = require("http").Server(app);
const port  = process.env.PORT || 8081;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:8081`)
})
