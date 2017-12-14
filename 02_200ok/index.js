const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.statusCode = 200
  res.write("OK")
  res.end()
})

server.listen('8080')
