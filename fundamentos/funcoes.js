/**
 * Estudo das funções
 */


//Função simples (literal)
function hello() {
    console.log("Hello function")
}

console.log(typeof(hello))
hello()

//Função atribuida
const hello2 = function () {
    console.log("Hello function assigned")
}

console.log(typeof(hello2))
hello2()

//Arrow function -> (simplificação da função atribuida)
//function ----- =>
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

//Funções com passagens de parâmetros e retorno 
//Funções literal
function somarS(num1, num2) {
    return (console.log(num1 + num2))
}

somarS(2, 3)

//Função atribuida
const somarA = function(num1, num2) {
    return (console.log(num1 + num2))
}

somarA(4, 5)

// Arrow function
const somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarA(5, 7)

// Arrow function simplificado (retorno é implicito)
const somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(2, 2)