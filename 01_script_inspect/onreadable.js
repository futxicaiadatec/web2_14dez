process.stdin.on('readable', () => {
    var b = process.stdin.read() || "";
    console.dir(b.length);
})
/*
** o evento readable avisa quando há dados no buffer,
** mas estes apenas são lidos através da função read()
*/
