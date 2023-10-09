var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/hello', function (req, res, next) {
  res.json({msg: 'hi ja!'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})