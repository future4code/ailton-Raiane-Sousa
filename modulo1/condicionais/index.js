//# ====================Exercícios de interpretação de código=======================
//#1

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//O codigo pede ao usuario um numero, e verifica se o modulo(resto da divisao)
//é igual á zero. Caso o resultado seja igual a zero ele imprime "passou no teste"
//caso contrario ele imprime "Não passou no teste".

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Ele imprime no console os numeros que o modulo é igual a zero.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//Para os numeros que tem 1 como modulo da divisão por dois.

//===================================================================================

//#2

// a) Para que serve o código acima?
// Serve para ver o preço das frutas

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O valor impresso será "Opreço da fruta maça é R$ 2.25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
// impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//A mensagem impressa seria "O preço da fruta pera é R$ 5 ", porque sem o comando 
// break ele nao para no preço da pera e sim no defaut que é 5.

//===================================================================================

//#3
// a) O que a primeira linha está fazendo?
// A primeira linha esta pedindo um numero para o usuarioe convertendo de String 
// para numero(porque todo prompt é um string).

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
// E se fosse o número -10?
//b.1) 10: 
// Iria aparecer "Esse numero passou no teste", depois apareceria um erro porque mesagem 
// nao foi definido fora da função.

//b.2) -10: 

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim vai aparecer erro porque como o numero é menor que zero ele ignora o "if(numero > 0) {
//   console.log("Esse número passou no teste")", e passa pra o proximo comando que é imprimir 
// a mensagem no console, mas como a mensagem foi declarada dentro da funçao, no escopo filho 
// o escopo global não consegue acessar.

//===================================================================================

//=====================Exercícios de escrita de código===============================

//#1
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se 
// ele/ela pode dirigir (apenas maiores de idade).
    
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idade = Number(prompt("Qual é a sua idade?"))

// const aprovado = (primeiraEtapa) => { 
//     switch(primeiraEtapa) {
//         case 1:
//         return `Você não pode dirigir!`

//         case 2:
//         return `Você não pode dirigir!`
            
//         case 3:
//         return `Você não pode dirigir!`

//         case 4:
//         return `Você não pode dirigir!`
      
//         case 5:
//         return `Você não pode dirigir!`
                  
//         case 6:
//         return `Você não pode dirigir!`
        
//         case 7:
//         return `Você não pode dirigir!`
    
//         case 8:
//         return `Você não pode dirigir!`
                
//         case 9:
//         return `Você não pode dirigir!`
    
//         case 10:
//         return `Você não pode dirigir!`
          
//         case 11:
//         return `Você não pode dirigir!`
                      
//         case 12:
//         return `Você não pode dirigir!`

//         case 13:
//         return `Você não pode dirigir!`
                
//         case 14:
//         return `Você não pode dirigir!`
    
//         case 15:
//         return `Você não pode dirigir!`
          
//         case 16:
//         return `Você não pode dirigir!`
                      
//         case 17:
//         return `Você não pode dirigir!`

//         case 18:
//         return `Você pode dirigir!`

//         default: 
//         return `Você pode dirigir!`
//     }
// }

// console.log(aprovado(idade))

//===========================================================================================================

//#2
// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
// Utilize o bloco if/else

// const turnoDaAula = prompt("Qual o turno em que você estuda?  M (matutino) ou V (Vespertino) ou N (Noturno)." )

// const turno = (manhã, tarde, noite) => {
//     if (manhã==="m") {

//         console.log("Bom dia!")

//     } else if (tarde==="v") {

//         console.log("Boa tarde!")

//     } else if (noite==="n") {

//         console.log("Boa noite!")

//     } else { 

//         console.log("Turno não encontrado, tente novamente")
//     }
// }

// console.log(turno(turnoDaAula))

//===============================================================================================================

//#3
// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 


// const turnoDaAula = prompt("Qual o turno em que você estuda?  M (matutino) ou V (Vespertino) ou N (Noturno)." )

// const alunoPorTurno = (turno) => {

//     switch(turno){

//         case 'm' :

//         return("Bom dia!")

//         case 'v':

//         return ("Boa tarde!")

//         case 'n':

//         return ("Boa noite!")

//         default:

//         return ("Turno não encontrado, tente novamente")
//     }
// }

// console.log(alunoPorTurno(turnoDaAula))

//================================================================================================================================
//4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao 
// usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço
// do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima
// `"Escolha outro filme :("`

// const genero = prompt("Qual o genero do filme?")

// const preco = Number(prompt("Qual o preço do ingresso"))


//     if (genero === fantasia && preco=<15 ){

//         console.log("Bom filme!")

//     }else{

//         console.log("Escolha outro filme")
//     }


  



