const express = require('express')
const app = express()
const cors = require('cors');
var server = require("http").Server(app);


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


server.listen(8081, () => {
  console.log(`Example app listening at http://localhost:8081`)
})
