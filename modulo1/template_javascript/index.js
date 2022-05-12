//# Exercícios de interpretação de código
//#1


// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a) O que vai ser impresso no console?
//Será impresso no console "10" e "50", porque a função faz a multiplicaçao
// da variavel por cinco.

// b) O que aconteceria se retirasse os dois `console.log` e 
// simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
// Só não iria mais aparecer no console.

// O que apareceria no console?
// Iria ficar um espaço vazio.

//============================================================================================

//#2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

//Essa função coloca em caixa baixa e verifica, se no texto inserido tem o item "cenoura".
//A sua ultilidade é quando uma lista é muito extensa, ajuda na verificação de itens.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

// i.   `Eu gosto de cenoura`
// true

// ii.  `CENOURA é bom pra vista`
// true

// iii. `Cenouras crescem na terra`
// true

//Porque o includes verifica o item, o encontra e retorna como um valor verdadeiro (true).

//============================================================================================

//#Exercícios de escrita de código

//#1. Escreva as funções explicadas abaixo:
    
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas
// informações sobre você, como: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a 
// função não possui entradas, apenas imprime essa mensagem.

// const frase = Function => console.log("Eu sua a raiane, tenho 25 anos, moro no Paraná e sou estudante.")
// console.log(frase)

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma 
// pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
// Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem
// com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// let novaFrase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)

// function novaFrase (nome, idade, endereco, profissao){

//     const nome = "Raiane"

//     const idade = 25

//     const endereco = "Paraná"

//     const profissao = "estudante"

// return novaFrase
// }

// console.log(novaFrase)

//===============================================================================================================

//#2
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas
//  entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function soma(n1,n2){
//     return n1+n2
// }
// console.log(soma(2,5))

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
// é **maior ou igual** ao segundo.

// let booleano = function(a,b){

//     return a >= b
// }
// console.log(booleano(5,8))

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// let parimp = function(n){
//     return n%2==0
// }

// console.log(parimp(7))

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
// juntamente com uma versão dela em letras maiúsculas.

function formatar(nome) {
  nome = nome.toLowerCase().trim().replaceAll("i", "a")
    return nome
}