//===================================Exercícios de interpretação de código===========================================

//#1
// O que o código abaixo está fazendo? 
//O codigo esta executando um looping de zero até que chegue a cinco.

// Qual o resultado impresso no console?


// ===================================================================================================================

//#2

// a) O que vai ser impresso no console?
//O console vai imprimir " 19, 21, 23, 25, 27, 30"

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
// o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim é o suficiente, basta char o array na função como por exemplo :'of lista'

// ===================================================================================================================

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//  O console vai imprimir "*,**,***,****".


// ===================================================================================================================


//==========================================Exercícios de escrita de código===========================================

//#1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um 
// array Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário 
// inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    
// c) Por fim, imprima o array com os nomes dos bichinhos no console


let quantidadeDePet = Number(prompt("Quantos bischos de estimação você tem? "))

const nuneroDigitadoDePet = []

while (quantidadeDePet !== 0) {

    let  nomeDoPet = prompt("qual é o nome do seu bicho de estimaçao? ")

    nuneroDigitadoDePet.push(nomeDoPet)

(contador < quantidadeDePet)

contador=contador+1
}


console.log(nuneroDigitadoDePet)