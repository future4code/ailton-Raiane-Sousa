//Exercícios de interpretação de código
//#1
// a) O que vai ser impresso no console?
//Vai aparecer:
// Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo"
// horario: "14h"

//====================================================================

//#2
// a) O que vai ser impresso no console?
// console.log(cachorro)
// nome: Juca 
// idade: 3
// raca: SRD

// console.log(gato)
// nome: Juba 
// idade: 3
// raca: SRD

// console.log(tartaruga)
// nome: Jubo 
// idade: 3
// raca: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// A sintaxe dos três pontos clona o obejeto.

//====================================================================

//#3
// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// false: apareceu false porque o valor atribuido a backender é "false".
//underfined: aparece porque altura não foi definido.

//====================================================================

//#Exercícios de escrita de código
//#1

// const pessoa = {
// 	nome: 'Melissa'
// 	apelidos: ['meli','melis','meme']
// }

// function frase (obj) {
// console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]},
// ${obj.apelidos[1]} ou ${obj.apelidos[2]}`)
// }

// frase(pessoa);

// const novoApelido = {
// 	...pessoa,
// 	apelidos: ['mel','melzinha','fofis bb']

// }
// novaFrase(novoApelido);
//====================================================================

//#2

const cliente1 = {
	nome: 'Clara'
	idade: '25'
	profissao: 'vendedora' 
}

const cliente2 = {
	nome: 'Maria'
	idade: '36'
	profissao: 'programadora' 
}

function formulario (obj) {
 dados = [obj.nome, obj.nome.length, obj.idade, obj. obj.profissao.length]
}