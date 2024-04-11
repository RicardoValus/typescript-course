// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0

//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }

//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)

//resposta:
class Moto {
    public velocidade: number = 0

    constructor(
        public nome: string,
    ) {
    }

    buzinar() {
        console.log('Bibip!')
    }

    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }

// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())

//resposta:
abstract class Objeto2D {
    constructor(
        public base: number = 0,
        public altura: number = 0
    ){}

    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number{
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 10
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }

// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })

// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)

class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (this.primeiroNome == '') {
            this._primeiroNome = nome
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome) //vazio
estagiario.primeiroNome = 'Ricardinho'
console.log(estagiario.primeiroNome)

