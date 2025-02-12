/**
 * Estudo array(vetor)
 * @author Arthur Cruz
 */


console.clear()
let alunos = []
console.log(typeof(alunos))
let alunosEM1 = ["Sara", "Isabela", "Pedro", "Beatriz", "Leticia"]
console.log(typeof(alunosEM1))
// .lenght (obtem o tamanho do array)
console.log(alunosEM1.length)
// Exibindo os dados de um array
console.log(alunosEM1)
// Exibindo um aluno do array
console.log(alunosEM1[2])
// Exibindo os dados do array em uma tabela
console.table(alunosEM1)
//Adicionando um elemento ao array
alunosEM1.push("Luiza")
console.table(alunosEM1)
// Modificar um elemento do array 
alunosEM1[0] = "Sara"
console.table(alunosEM1)
// Excluir um elemento do array
delete alunosEM1[2]
console.table(alunosEM1)
// percorree um array
let notas = [3,8,5,9,2] 

// Uso do laço for para percorree um array
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// forEach (simplificado do laço for para uso em array)
notas.forEach((n) => {
    console.log(n)
})

// map (mapeamento da estrutura de dados para cálculos ou conversões)
// Exemplo 1: Adicionar 1 ponto as notas
let notasAtualzadas = notas.map((na) => {
    return na + 1
})

console.log(notas)
console.log(notasAtualzadas)

// Exemplo 2: Conversão de um sistema de notas
/*
    NA - Não atendeu (nota < 5)
    PA - parcialmente atendido (nota entre 5 e 7)
    A - Atendeu (nota > 7)
 */
    
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})

console.log(notas)
console.log(notasConvertidas)