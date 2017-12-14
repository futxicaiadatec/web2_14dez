process.stdin.on('data', b => {
  console.log(b.length)
})
/*
** os buffers são enviados para a callback com parâmetro assim que chegam do processo
*/
