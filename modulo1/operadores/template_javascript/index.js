 // #Exercícios de interpretação de código
 // #1
 // const bool1 = true
 // const bool2 = false
 // const bool3 = !bool2

 // let resultado = bool1 && bool2
 // console.log("a. ", resultado)

 // O resultado que será impresso no console  é "false",porque bool1
 // é true e bool2 é false, e seria necessário que os dois fossem true, 
 // para que o resultado fosse true, porque os operador "&&" verifica se
 // as duas hipóteses são verdadeiras (true).


 // resultado = bool1 && bool2 && bool3 
 // console.log("b. ", resultado) 

 // O resultado que será impresso no console é "false", porque as três 
 // declarações são diferentes; bool1 é true, e bool2 e bool3 são false sendo 
 // assim o resultado = bool1 && bool2 && bool3 é "false".
 // resultado = !resultado && (bool1 || bool2) 
 // console.log("c. ", resultado)

 //  O resultado que será impresso no console é "true", porque o !resultado é true e
 // bool1 || bool2 também resulta em true, e como vimos o operador && faz esta análise.

 // console.log("d. ", typeof resultado)
 //  O resultado que será impresso no console é "boolean", porque o typeof
 // identifica qual o tipo de varriável ultilizada . 

 // ------------------------------------------------------------------------------------------
 
 // //#2

 // let primeiroNumero = prompt("Digite um numero!")
 // let segundoNumero = prompt("Digite outro numero!")

 // const soma = primeiroNumero + segundoNumero

 // console.log(soma)

 // O console vai mostrar os dois números juntos respectivamente, por exemplo:
 // se fosse digitado 1 no primeiro numero e 2 no segundoNumero, o resultado iria aparecer "12", 
 // porque o prompt faz a leitura somente como String, ou seja, quando ele se depara com 
 // "const soma = primeiroNumero + segundoNumero", ele soma as duas String, e não um valor numerico 
 // como  o esperado pelo escritor do código.

 // -------------------------------------------------------------------------------------------

 //#3
 // let primeiroNumero = prompt("Digite um numero!")
 // let segundoNumero = prompt("Digite outro numero!")

 // const soma = primeiroNumero + segundoNumero

 // console.log(soma)

 // Para fazer a soma dos números digitados é só converter de "string"
 // para "number", de que forma fazemos isso? É só adicionar antes do prompt,
 // "Number()", por exemplo; let primeiroNumero = Number(prompt("Digite um número!")).

 // --------------------------------------------------------------------------------------------
 //Exercícios de escrita de código
 //#1
 // let minhaIdade = Number(prompt("Quantos anos você tem ?"))
 // let idadeDoMelhorAmigo = Number(prompt("Quantos anos o seu melhor amigo(a) tem ?"))

 // const souMaisVelho = minhaIdade > idadeDoMelhorAmigo
 // const diferencaDeIdade = minhaIdade - idadeDoMelhorAmigo
 
 // console.log("Sua idade é maior do que a do seu amigo(a) ?", souMaisVelho)

 // console.log("A diferença entre vocês é de:" , diferencaDeIdade)

 //----------------------------------------------------------------------------------------------

 //#2

 // let numeroPar = Number(prompt("Digite um número par!"))

 // const numeroDivisor = 2

 // const restodadivisao = numeroPar % numeroDivisor

 // console.log(restodadivisao)

 // Notei que toda vez que coloco um número par o resto (ou modulo) da 
 // divisão é igual a zero
 
 // Quando o usuario digita um número ímpar, o modulo da divisão é igual 
 // á um.

 //----------------------------------------------------------------------------------------------

 //#3

 //  let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

 //  const idadeEmMeses = idadeDoUsuario * 12

 //  const idadeEmDias = idadeEmMeses * 365

 //  const idadeEmHoras = idadeEmDias * 24

 //  console.log("Você tem ", idadeDoUsuario, "anos", "Possui de existencia ", idadeEmMeses,"meses,", idadeEmDias ,
 //  "dias e ", idadeEmHoras, "horas.")

 //-----------------------------------------------------------------------------------------------

 //#4

 //  let primeiroNumero = Number(prompt("Digite um número!"))

 //  let segundoNumero = Number(prompt("Digite outro número!"))

 //  const  numeroMaior =  primeiroNumero > segundoNumero
  
 //  console.log(numeroMaior)

 //  const numeroIgual = primeiroNumero === segundoNumero

 //  console.log(numeroIgual)

 //  const primeiroNumeroDivisivel =Boolean((primeiroNumero / segundoNumero))

 //  console.log(primeiroNumeroDivisivel)

 //  const segundoNumeroDivisivel = Boolean((segundoNumero / primeiroNumero))

 //  console.log(segundoNumeroDivisivel)

 

 


 







 






