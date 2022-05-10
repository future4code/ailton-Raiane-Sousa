1.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a,b)

/*O console vai mostrar a variavel "b" que é igual a 10, 
após isso o valor dele é reatribuido a 5, então o console
vai mostrar (10,5), sendo dez referente à variavel "a" e 5 referente
à variavel"b".
*/

2. 
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a,b,c)

/* O console vai mostrar (10,10,10), porque "a" é atribuido ao valor 
de "c", ou seja dez; "b" tem uma reatribuição de valor e passa a ser
"c" ou seja também recebe o valor dez; E por último "a" é reatribuido ao 
valor de "b", que é 10.*/

3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* A variável "p" ficaria mais descritiva se fossa declarada "horasPorDia"
e a variável "t" ficaria melhor atribuida à "pagamentoDiario"
*/
1
let nome
let idade

console.log(typeof nome, typeof idade)
/* O console fez a impressão "undefined", porque as duas variáveis 
declaradas estão estão vazias.*/

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)
 /* O console impreme que as duas variáveis sai do tipo 
 "string", porque mesmo idade sendo um número, o comando
 "prompt" faz a leitura como um texto.
 */
console.log("Olá,", nome, "você tem", idade, "anos.")

2
let primeiraPergunta = prompt("Você esta usando o celular?")
let segundaPergunta = prompt("Você tem cabelo colorido?")
let terceiraPergunta = prompt("Você usa brinco?")

console.log("Você esta usando o celular?", primeiraPergunta, "Você tem cabelo colorido?", segundaPergunta,
 "Você usa brinco?" ,terceiraPergunta,)

3
let numero1 = prompt("Digite um número:")
let numero2 = prompt("Digite outro número")


console.log("O novo valor do primeiro número é:", numero2)
console.log("O novo valor do segundo número é ", numero1)


