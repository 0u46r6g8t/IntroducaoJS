const frutas = ['maça', 'mamão', 'acerola', 'banana'];

const num = [1, 2, [3, 4]];

const n = [1, 2, 3, 4];

// num.forEach((value, index) => {

//     value.forEach((v, i) => {

//         console.log(`${i+1}: ${v}`);

//     })

//     console.log('');

// });

// Map[''] Retorna um novo array, de mesmo tamanho, interando cada item de um array

// console.log(frutas.map((value, index) => `${index} - ${value}`));

// Flat[''] Retorna um novo array com todos os elementos de um sub-array

//console.log(num.flat());

// FlatMap -> Retorna um novo array assom como a funcção map e executa um flat de pronfundidade;

// console.log(n.flatMap(value => [value * 2]));

// console.log(value => [[value * 2]]);

// Keys[''] => Retorna um interator com as chaves do array

// const interator = n.keys();

// console.log(interator.next());

// console.log(interator.next());

// console.log(interator.next());

// console.log(interator.next());

// Value [] => retorna o valor do indice

// Entries => retorna o valor com o indice da chave

// const frutasNova = frutas.entries();

// console.log(frutasNova.next());
// console.log(frutasNova.next());
// console.log(frutasNova.next());

// Find => Utilizado para procurar um elemento

// const firstThanTwo =  n.find(value => value > 2);

// console.log(firstThanTwo);

// findIndex => Retorna o index

// const firstThanTwo =  n.findIndex(value => value > 1);

// console.log(firstThanTwo);

// Filter => Realiza um filtro no array

// const firstThanTwo =  n.filter(value => value > 2);

// console.log(firstThanTwo);

// IndexOf => Retorna o primeiro indice que o elemento pode ser encontrado no array

const ar = [1, 3, 3, 4, 5];

// const firstResult = ar.indexOf(3);

// console.log(firstResult);

// lastIndexOf => retorna o ultimo indice que o elemento pode ser encontrado

// const firstResult = ar.lastIndexOf(3);

// console.log(firstResult);

// Includes => Retorna um boolean verificando se determinado elemento existe no array

// console.log(ar.includes(3));

// console.log(ar.includes(54));

// Some => retorna um boolean verificando se pelo menos item de um array satisfaz a condição

// console.log(ar.some(value => value % 2 === 0));

// every => retorna se todos os elementos satisfazem a condição

// console.log(ar.every(value => value % 2 === 0));

// sort => Ordena um array de elementos

// console.log(ar.sort());

// reverse => Reverte a ordem do array

// console.log(ar.reverse());

// join => Junta todos os elementos de um array, separando porum delimitador e retorna um string

// console.log(ar.join('-'));

// reduce => retorna um novo tipo de dado iterando cada posição de um array

// console.log(ar.reduce((total, value) => total += value, 0 ));

