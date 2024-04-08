//STRING ----------------------------------------------------------
let nome: string = 'Ricardo'
console.log(nome)
// nome = 28

//NUMBERS ----------------------------------------------------------
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

//BOOLEAN ----------------------------------------------------------
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

//TIPOS EXPLÍCITOS ----------------------------------------------------------
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = '27'
// console.log(typeof minhaIdade)

//ARRAY ----------------------------------------------------------
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

//TUPLAS ----------------------------------------------------------
let endereco: [string, number, string] = ["Avenida Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

//ENUMS ----------------------------------------------------------
enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //10
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

//ANY ----------------------------------------------------------
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2024 }
console.log(carro)

//FUNÇÕES ----------------------------------------------------------
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    //return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

//TIPO FUNÇÃO ----------------------------------------------------------
let calculo: (x: number, y: number) => number

//calculo = digaoi
//calculo()

// calculo = {}

calculo = multiplicar
console.log(calculo(5, 6))

//OBJETOS ----------------------------------------------------------
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)
//usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria',
}
console.log(usuario)

// Desafio ----------------------------------------------------------
/*    Criar um objeto funcionario com:
        -Array de strings com os nomes dos supervisores
        -Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<=8)
            -> Fora do horário (>8)
*/

// let funcionario: {
//     supervisores: string[],
//     baterPonto: (horas: number) => string
// } = {
//     supervisores: ['Marcela', 'Leonardo'],
//     baterPonto(horario: number): string {
//         if(horario <= 8){
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário!'
//         }
//     }
// }

// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(8))
// console.log(funcionario.baterPonto(9))

// funcionario = {}

//fim do desafio, a partir daqui estou prosseguindo 
//com o conteúdo do curso


//CONTINUAÇÃO ----------------------------------------------------------

//ALIAS ----------------------------------------------------------

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Marcela', 'Leonardo'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Peterson'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// UNION TYPES ----------------------------------------------------------
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}`)
//nota = true

//CHECANDO TIPOS ----------------------------------------------------------
let valor = 30

if (typeof valor === "number") { //isso só é necessário em js, pois o ts entende e garante o tipo após a atribuição
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

//NEVER ----------------------------------------------------------

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4, //exemplo: -1
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco <= 0) {
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()

//NULL ----------------------------------------------------------
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '99999999',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any!
podeSerNulo = 12
podeSerNulo = 'abc'
console.log(podeSerNulo)

//Desafio ----------------------------------------------------------
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contato: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contato: ['88888888', '77777777']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)

//FIM!