"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
// --------------------------------------
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
// --------------------------------------
const cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
// --------------------------------------
var segredo = 'externo!';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
// --------------------------------------
{
    {
        const def = 'def';
        console.log(def);
    }
}
// --------------------------------------
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// --------------------------------------
//Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
// --------------------------------------
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('João');
// --------------------------------------
//this
// function normalComThis(){
//     console.log(this) //função normal, o this pode variar, não apenas com o uso do bind
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()
// //this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial() //Em função arrow, o this nunca vai mudar
// //o local onde a função foi definida, é onde vai descobrir qual this ela vai usar
// --------------------------------------
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// --------------------------------------
// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers)); //contexto spread
const turmaA = ['João', 'Pedro', 'Ricardo'];
const turmaB = ['Elian', ...turmaA, 'Miguel, Fernanda'];
console.log(turmaB);
// --------------------------------------
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers));
// --------------------------------------
//# sourceMappingURL=ecmascript.js.map