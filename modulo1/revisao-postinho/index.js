
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return`No comparador de ilgualdade ${a}===${b} é ${a === b}`
// }
// console.log(checarDesigualdade(4, 4));


// c-)Faça uma função chamada "verificaSeEMaior"

// console.log(verificaSeEMaior(321, 2156));

// const verificaSeEMaior = (a,b) =>{
//     if (a>b){
//         return `O número ${a} é maior que ${b}.`
//     }else{
//         return `O número ${a} não é maior que ${b}.`
//     }
// }
// console.log(verificaSeEMaior(1,2))

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= verdadeiro
// c-) 'a'==='b'= falso
// d-) 'b'>'a'= verdadeiro
// e-) 0!==null= verdeiro


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const usuario = []

// const nomeDoUsuario = prompt("Qual é o seu nome?") 

// const anoDeNascimento = Number(prompt("Qual a sua idade?"))

// const senhaDoUsuario = prompt("Digite uma senha (Com 6 caracteres)")

// const nacionalidade = prompt("Qual sua nacionalidade?")

// const cadastro = (pessoa, idade, senha, origem) => {

//     if(idade >= 18 && senha.length === 6 && origem === 'brasileira') {
    
//      return usuario.push (pessoa, idade, senha, origem)

//     } else {

//     console.log( `Há algo errado no seu cadastro`)

//     }
// }

// console.log(cadastro(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade));

// console.log(usuario)

// Exercício 4-----------------------------------------------------------------------------------------------
// const senhaDoUsuario = prompt("Digie sua senha") 
// const login = (senha) => {
//     const login = "labenu"
//     if (senha.toLowerCase() === login){
//         return `Usuario logado`
//     }else{
//         return `Senha inválida`
//     }
    
// }

// console.log(login(senhaDoUsuario));

// Exercício 5----------------------------------------------------------------------------------------------------
// const nomeDoUsuario = prompt("Qual é o seu nome?")
// const nomeDaVacina  = prompt("Qual vacina você tomou?")
// const dataAtual = 22/05/2022

// const primeiraDose = (vacina, usuario) => { 

//  coronavac = {
//         nome: usuario,
//         tempo: 28,
//         dataParaRetorno:'19/06/2022'

//     }

//  astrazenica = {
//         nome: usuario,
//         tempo: 90,
//         dataParaRetorno:'20/08/2022'

//     } 

//  pfizer = {
//         nome: usuario,
//         tempo: 90,
//         dataParaRetorno:'20/08/2022'

//     }

//     if(vacina.toLowerCase() === 'coronavac' ){
//         return `Olá ${coronavac.nome}! A próxima dose da coronavac é daqui a ${coronavac.tempo} dias. 
// Compareça no posto na data ${coronavac.dataParaRetorno}.`

//     } else if (vacina.toLowerCase() === 'astrazenica'){
//         return `Olá ${astrazenica.nome}! A próxima dose da astrazenica é daqui a ${astrazenica.tempo} dias. 
// Compareça no posto na data ${astrazenica.dataParaRetorno}.`

//     } else if (vacina.toLowerCase() === 'pfizer'){
//         return `Olá ${pfizer.nome}! A próxima dose da pfizer é daqui a ${pfizer.tempo} dias. 
// Compareça no posto na data ${pfizer.dataParaRetorno}.`   
    
//     }else{
//         return `Há algum erro no seu cartão de vacina`
//     }
// }
// console.log(primeiraDose(nomeDaVacina, nomeDoUsuario))

// LOOP+CONDICIONAL
// Exercício 6 -------------------------------------------------------------------------------------


const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
]

const segundaDose = (nomeDoUsuario) => {
segundaDose = usuarios.map((item)=>{

      return {...item, imunizacao: (item.imunizacao 'completa')}
     
      )}}

console.log(segundaDose('Barbara'));

// Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

    

// }
// console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());