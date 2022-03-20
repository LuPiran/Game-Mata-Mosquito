var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
    
ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * altura)

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'mosca.png'

    document.body.appendChild(mosquito)
}

