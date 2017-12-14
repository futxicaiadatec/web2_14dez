const chalk = require('chalk')

function rgb (str) {
  const rgb = ['red','green','blue']
  const idx = Math.floor(3 * Math.random())
  const painter = chalk[rgb[idx]]
  return painter(str)
}

process.stdin.on('data', b => {
  debugger
  console.log(rgb(b.toString()))
})

// https://nodejs.org/api/debugger.html
