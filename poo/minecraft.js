/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author Arthur Cruz
 */

// Classe Modelo (iniciar sempre com letra maíscula)
class Bloco {
    //atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações
    criarBloco() {
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }

    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")

    }

}


//Classe modelo Enxada com herança de bloco
class Enxada extends Bloco{
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia) //super -> classe pai
        this.conquista = conquista
    }

    //ações
    criarEnxada() {
        console.log("--------------------------------------------------")
        console.log("-_")
        console.log("/")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia ${this.resistencia}`)
    }

    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
    }
    }

    // polimorfismo (obrigatório manter o nome do metódo da classe modelo (pai))
    minerar() {
        console.log("✞ Dano atribuído!")
    }
}


/*****  MUNDO *******/
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

//Instanciando (criando) um objeto
const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()
console.log(typeof(bloco3))


const enxada = new Enxada("madeira", 2, false)
enxada.criarEnxada()
enxada.arar()

const enxada2 = new Enxada("ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()