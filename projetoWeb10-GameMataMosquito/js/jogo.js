var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
    
ajustaTamanhoPalcoJogo()

//função para fazer o mosquito aparecer na tela randomicamente 
function posicaoRandomica(){

    //Removendo mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){

        }else{
            document.getElementById('v' + vidas).src ="coracao_vazio.png"
            vidas++
        }
    }
    

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    //A partir do click do mause, mata o mosquito e faça com que ele suma e apareça outro
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

//função para fazer o tamanho do mosquito randomicamente 
function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//função para ecolher o lado randomico do mosquito
function ladoRandomico(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

