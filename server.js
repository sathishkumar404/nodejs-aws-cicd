const express = require('express')
const app = express()
var http = require("http").Server(app);
const port = process.env.port || 8081;

http.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
