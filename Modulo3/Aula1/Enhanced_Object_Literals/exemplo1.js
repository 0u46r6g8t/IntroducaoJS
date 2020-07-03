// Objetos Literais => Padrão
// var prop1 = 'Digital Innovation One';

// var obj = {
//     prop1: prop1
// }

// console.log(obj);

/// Depois do ES6 

// Objetos-> var prop1 = 'Digital Innovation One';

// var obj = {
//     prop1
// };

// console.log(obj);
//------------------------------------------------
// Function -> function method(){
//     console.log('Digital Innovation One');
// }

// var obj = {
//     method
// };

// obj.method()

// var obj = {
//     sum: function sum(a, b){
//         return a + b;
//     }
// }

// console.log(obj.sum(10, 2));

// Forma de encurtar o código

// var obj = {
//     sum(a, b){
//         return a + b;
//     }
// };

// console.log(obj.sum(10, 3));
//------------------------------------------------
// Para inserir uma propriedade antigamente, encurtando a forma como se trabalha com os objetos literais

// var propName = 'test';

// var obj = {

// };

// obj[propName] = `prop Value`;

// console.log(obj);

// Depois do ES6

var propName = 'test';

var obj = {
    [propName]: 'prop value'
}

console.log(obj);
