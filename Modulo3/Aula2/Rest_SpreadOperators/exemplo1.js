// Operador rest Operator ...params

// function soma(...params){
//     // arguments -> utilizado para que pegar os argumentos passados para a function 
//     /*
//         antigamente era comum realizar tais operações com ele como descrito a baixo

//         var value = 0;
//         for(var i = 0; i < arguments.length; i++){
//             value += arguments[i];
//         }

//         com o surgimento do es6 

//     */
//     return params.reduce((acc, value) => acc + value, 0);

//     // O 'acc' irá pegar o primeiro valor, e o 'value' será o último 

// }

// console.log(soma(5, 6, 7, 8, 9, 0, 45));

// Trabalhando com arrow function, não irá conseguir utilizar o 'arguments', sendo melhor utilizar o rest operator

// const sum = (a, b, ...params) => {
//     console.log(a, b, ...params);
// }

const multiply = (...argv) => argv.reduce((acc, value) => acc * value, 1);

/*
const sum = (...rest) => {
    return multiply.apply(undefined, rest);
}// Se utilizasse esse tipo de programação, provavelmente o código demoraria um tempo para ser entendido
// Fazendo com que o outro desenv.. terá que entender que vc está querendo redefinir o método e por isso 
// Foi criado um operador chamado 'spread' ..., fazendo com que ele pegue todos os elementos de uma lista e transforme em novos 
// params para a nova função / metodo
*/

// const sum = (...rest) => {
//     return multiply(...rest);
// }
// // 'spread' pode ser utilizado em 
// /*
//     String, arrays, objects, objects literais
// */

// console.log(sum(3, 4, 5, 6, 7, 8, 9));

// String

// const str = 'Digital Innovation One';

function logArgs(...rest){
    console.log(rest);
}

// logArgs(...str); -> Está quebrando o array e transformand em params 

// Array(s)

const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7, 8];
const arr3 = [...arr2, ...arr, 0, 0, 0]
// logArgs(...arr);

console.log(arr3)

// Object 

const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: 'gustavo'
}

console.log(obj2);