var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
    
ajustaTamanhoPalcoJogo()

var posicaoX = Math.random() * largura
var posicaoY = Math.random() * altura

console.log(posicaoX, posicaoY)