var obj = {}
obj.nome = document.getElementById('nome').value
obj.dados = document.getElementById('dados').value

var ajax = new XMLHttpRequest()
ajax.open('POST', 'http://127.0.0.1:8080/api')
ajax.onload = e => {
  const obj = JSON.parse(e.target.response)
	console.dir(obj)

  const body = JSON.parse(obj.body)
  console.dir(body)
}
ajax.send(JSON.stringify(obj))
