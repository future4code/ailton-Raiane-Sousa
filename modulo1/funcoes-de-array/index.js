//====================================Exercícios de interpretação de código========================================

//#1
// a) O que vai ser impresso no console?
//Vai aparecer no console cada elemento do array separadamente, tres obejetos
// dentro de um array, porem dividido pelo seu indice.

//=================================================================================================================

// //#2
// a) O que vai ser impresso no console?
//Vai aparecer os nomes em ordem de indice em um array.

//=================================================================================================================

//#3

// a) O que vai ser impresso no console?
//  Vai aparecer no console umnovo array com todos os itens que são diferentes
// de "Chijo".

//=================================================================================================================

//=======================================Exercícios de escrita de código===========================================

// a) Crie um novo array que contenha apenas o nome dos doguinhos


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const listaNomesPet = pets.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(listaNomesPet)

// b) Crie um novo array apenas com os [cachorros salsicha]

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const cachorroSalsicha = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
//  })
 
//  console.log(cachorroSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar 
// para todos os clientes que são poodles. A mensagem deve ser: 
// "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const cachorroPoodle = pets.filter ((item) => {

//     for(let i = 0; i < pets.length; i++) {

//         if(item.raca === 'Poodle') {
//             console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} !`)
//         }
//     }
// })

//=========================================================================================================================

// //#2

// a) Crie um novo array que contenha apenas o nome de cada item
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const listaDeProdutos = produtos.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(listaDeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de 
// cada item, aplicando 5% de desconto em todos eles


// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const listaDeBebibas = produtos.filter((item, index, array) => {
//     return item.categoria === "Bebidas"
//  })
 
//  console.log(listaDeBebibas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
 
 
// const  selecaoYpe = produtos.filter ((item,index) => {
//     if (item.nome.includes("Ypê")){
//         return item 
//     } 
 
//console.log(selecaoYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apena itens cujo nome contenha a palavra "Ypê"

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
 
//     const  selecaoYpe = produtos.filter ((item,index) => {
//     if (item.nome.includes("Ypê")){
//         return item 
//     } 
// } )
//     const frase = selecaoYpe.map((item) =>{
//         console.log(`Compre ${item.nome} por ${item.preco}"`)
//     })
