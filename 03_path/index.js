const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.statusCode = 200

  const obj = {}
  obj.status = 200
  obj.url = req.url
  obj.timestamp = Date.now()

  str = JSON.stringify(obj)

  res.write(str)
  res.end()
})

server.listen('8080')

// https://github.com/delvedor/find-my-way
