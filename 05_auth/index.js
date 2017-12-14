require('http').createServer((req,res)=>{
  const auth = req.headers['authorization'] || " "
  console.log(auth)
  const plain_auth = Buffer(auth.split(' ')[1],'base64').toString()

  console.log(plain_auth)

  if(plain_auth === "aluno:123456"){
    res.end(':)')
  }else{
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm=\"Basic Authentication\"')
    res.end('ops')
    console.log('nops')
  }
}).listen(3000)

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
//https://wiki.mozilla.org/Security/Guidelines/Web_Security
