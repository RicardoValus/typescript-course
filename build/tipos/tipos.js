"use strict";
//STRING ----------------------------------------------------------
let nome = 'Ricardo';
console.log(nome);
// nome = 28
//NUMBERS ----------------------------------------------------------
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//BOOLEAN ----------------------------------------------------------
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//TIPOS EXPLÍCITOS ----------------------------------------------------------
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)
//ARRAY ----------------------------------------------------------
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
//TUPLAS ----------------------------------------------------------
let endereco = ["Avenida Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
//ENUMS ----------------------------------------------------------
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//ANY ----------------------------------------------------------
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2024 };
console.log(carro);
//FUNÇÕES ----------------------------------------------------------
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9));
//TIPO FUNÇÃO ----------------------------------------------------------
let calculo;
//calculo = digaoi
//calculo()
// calculo = {}
calculo = multiplicar;
console.log(calculo(5, 6));
//OBJETOS ----------------------------------------------------------
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
//usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
let funcionario = {
    supervisores: ['Marcela', 'Leonardo'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    supervisores: ['Bia', 'Peterson'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// UNION TYPES ----------------------------------------------------------
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}`);
//nota = true
//CHECANDO TIPOS ----------------------------------------------------------
let valor = 30;
if (typeof valor === "number") { //isso só é necessário em js, pois o ts entende e garante o tipo após a atribuição
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
//NEVER ----------------------------------------------------------
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4, //exemplo: -1
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
//NULL ----------------------------------------------------------
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '99999999',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // any!
podeSerNulo = 12;
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contato: ['88888888', '77777777']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//FIM!
//# sourceMappingURL=tipos.js.map