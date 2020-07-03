// function multiply(a, b = 1){
//     // b = b || 1; Uma forma de verificar se o segundo valor foi ou ñ passado!
//     // Caso contrário seja passado o valor 0 então é possivel verficar com o undefined 
//     // b = typeof b === 'undefined' ? 1 : b;
//     return a * b;
// }
// console.log(multiply(10, 0));
// Lazy evaluation --------> 

function randomNumbem(){
    return parseFloat(Math.random() * 10);
}

function multiplyNumber(a, b = randomNumbem()){
    console.log(b);    
    return a * b;
}

console.log(multiplyNumber(5));