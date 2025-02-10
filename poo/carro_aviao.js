/**
 * @author Arthur Cruz
 */

class Carro {
    constructor(ano, cor) {
        this.ano = ano 
        this.cor = cor
    }

    //ações
    criarCarro() {
        console.log("---------------------------------")
        console.log("        _______      ")
        console.log("       //  ||\ \     ")
        console.log(" _____//___||_\ \___ ")
        console.log(" )  _          _    |")
        console.log(" |_/ \________/ \___|")
        console.log("___\_/________\_/____")
        console.log(`Ano do carro: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
    }

    ligar() {
        console.log(`Carro ${this.cor} está ligado`)
    }

    desligado() {
        console.log(`Carro está desligado`)
    }

    acelerar() {
        console.log(`Carro esta acelerando!!!`)
    }
    
}


const carro1 = new Carro("2024", )
carro1.criarCarro()
carro1.ligar()
