/**
 * Tipagem dinâmica - JS 
 */

// declarão de variáveis 
let nome, idade, peso, altura, vip, imc

//entrada de dados
nome = "Arthur Cruz"
idade = 16 
peso = 63
altura = 1.78
vip = true 

console.log(typeof(nome))
console.clear()

//procesamento
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)

//saída
console.log("Ficha do aluno")
console.log("______________________")
console.log(`Nome: ${nome}`)
console.log(`Iade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`IMC: ${imc}`)
console.log(`FCM: ${fcm} bpm`)
console.log("Hello Word");

