/**
 * Ano automatico
 * @author Arthur Cruz Alves
*/

// inserindo o ano na tag<span>
let ano = document.getElementById('copyrightYear')
// a linha abaixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// a linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual