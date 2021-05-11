const express = require('express')
const app = express()
var http = require("http").Server(app);
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
