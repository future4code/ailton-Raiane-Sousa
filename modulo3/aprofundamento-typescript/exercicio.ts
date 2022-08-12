//Exercício 2

// a) Quais são as entradas e saídas dessa função? 
//R: As entradas são números ordenados  a e b, e as saídas são maior número,
// o menor e a media.

// Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// function obterEstatisticas(numeros: number|any) {

//     const numerosOrdenados: any= numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     type Estatistica = {
//         maior:any,
//         menor: any,
//         media:number
//     }
//     const estatisticas: Estatistica= {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// b) Quais outras variáveis compõem essa função?
//R: As variáveis que compõem essa função são: numeroOrdemados, soma e estatisticas.

//  Explicite a tipagem de todas elas 

//R:

// numerosOrdenados : any e number
// soma: number
// estatisticas: any, any e number

//c) Crie um type chamado amostra de dados, isto é, 
//um objeto com as propriedades numeros e obterEstatisticas

//R: 
// type Amostra ={
//     numeros: number[],
//     obterEstatisticas: any
// }
// const amostraDeIdades:Amostra = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }