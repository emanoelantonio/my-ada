console.log('===== JOGO DA FORCA =====')

let controlador = new ControladorJogo();
let partida = controlador.iniciarPartida();
console.log(partida.chutarLetra('a'));
console.log(partida.chutarLetra('x'));
console.log(partida.chutarLetra('w'));
console.log(partida.chutarLetra('y'));
console.log(partida.chutarLetra('z'));
console.log(partida.chutarLetra('b'));
console.log(partida.chutarPalavra('angular'));
