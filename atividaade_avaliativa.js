/* 1) (0,5 p) Crie variáveis para armazenar seu nome, altura, série e turma. Após isso, mostre no terminal uma mensagem personalizada se apresentando.    vvvv */

/* 2) (0,5 p) Crie uma lista com 3 esportes que você gosta vvvvv*/

/* 3) (1,0 p) Crie uma condição que verifica se você é maior que o professor Patrick, que possui 1.73 de altura vvvv */

/* 4) (1,0 p) Crie uma função que mostre os 3 esportes no terminal. Use o laço de repetição que preferir. vvvvvv */

/* 5) (1,0 p) Crie um código que verifica se o esporte "natação" existe na lista criada da questão 2. */

/* 6) (1,0 p) Crie um laço de repetição que conta de 0 até -10 */



let nome = "Arthur"
let altura = 1.71
let serie = 3
let turma = "DSC"
console.log ("Olá, meu nome é "+ nome +" minha altura é "+ altura + " Altualmente estou "+ serie,turma+".")



const esportes = ["futebool","volei","tenis_de_mesa",] 

function alturaPatrick(altura){
    if (altura >= 1.73){
        console.log("Voce é maior que o Professor Patrick")
    }else{
        console.log("Voce é mais baixo que o Professor")
    }
}
alturaPatrick()

function mostrarEsportes(){
let contador = 0
    while (contador <esportes.length){
        console.log(contador + " - " + esportes[contador] )
        contador++
    }
}
mostrarEsportes()

function verificarNatacao(){
if (esportes == "natação"){
    console.log("Tem Natação")
}else{
    console.log("Não tem Natação")
}
}
verificarNatacao()


function Contador(){
let contador = 1
    while( contador <= 10){
        console.log(contador)
    contador++
    }
}
Contador()
