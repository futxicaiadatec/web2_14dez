// demo
var ajax = new XMLHttpRequest()

ajax.open('GET', 'http://127.0.0.1:8080')

ajax.onload = e => {
    console.dir(e)
}
ajax.send()
