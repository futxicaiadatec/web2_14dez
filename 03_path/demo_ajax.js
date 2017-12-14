// demo
var ajax = new XMLHttpRequest()

ajax.open('GET', 'http://127.0.0.1:8080/json/teste')

ajax.onload = e => {
  const obj = JSON.parse(e.target.response)
	console.dir(obj)
}
ajax.send()
