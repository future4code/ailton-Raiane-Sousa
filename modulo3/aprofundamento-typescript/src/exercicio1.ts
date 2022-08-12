// Exercício 1

// a)

// let minhaString:string= "Text";
// let minhaString=10

// Não é possível declarar novamente a variável de escopo de bloco
// 'minhaString', pois é uma string. 

//b)

// let meuNumero:number=10;

// Como fazer para que essa variável também aceite strings? 
// R: Atribuimos a variavel a number e string

//Ou seja, como criamos no typescript uma variável que aceite
// mais de um tipo de valor?

//R:let meuNumero: number|string=10


//c)

// enum CoresArcoIris{
//    VERMELHO = "Vermelho",
//    LARANJA = "laranja",
//    AMARELO = "Amarelo",
//    VERDE = "verde",
//    AZUL = "azul",
//    VIOLETA = "violeta"
// }

// type Pessoa={
//     nome: string,
//     idade:number,
//     corFavorita:CoresArcoIris
// }

// let pessoa1: Pessoa={
//     nome:"Raiane",
//     idade:25,
//     corFavorita:CoresArcoIris.VERMELHO
// }

// let pessoa2: Pessoa={
//     nome:"Melissa",
//     idade:33,
//     corFavorita:CoresArcoIris.VIOLETA
// }

// let pessoa3: Pessoa={
//     nome:"Laura",
//     idade:28,
//     corFavorita:CoresArcoIris.AMARELO
// }

// let pessoa4: Pessoa={
//     nome:"Claudio",
//     idade:45,
//     corFavorita:CoresArcoIris.AZUL
// }

