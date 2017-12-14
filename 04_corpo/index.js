const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {

  res.writeHead(200, {'Content-Type': 'application/json'})

  const obj = {}
  obj.status = 200
  obj.url = req.url
  obj.body = ""
  obj.packts = 1

  req.on('data', chunk => {
    obj.body += chunk.toString()
    obj.packts++
  })

  req.on('end', () => {
    str = JSON.stringify(obj, null, 4)
    console.log(obj.body)
    res.write(str)
    res.end()
  })
})

server.listen('3000')
