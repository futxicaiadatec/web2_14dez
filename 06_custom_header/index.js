require('http').createServer((req, res) => {
  res.statusCode = 200
  const rawHeaders = JSON.stringify(req.rawHeaders, null, 4)
  res.end(rawHeaders)
}).listen(3000)
