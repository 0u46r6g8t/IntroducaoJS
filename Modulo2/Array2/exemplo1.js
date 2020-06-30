// Criando um array com o método .of

// const newArray = Array.of('Gustavo', 'Stefany', 'Enzo', 'Walter');

// console.log(newArray);

// Se passar apenas um valor dentro do array na sua criação indica a quantidade de espaços

// const newArray2 = new Array(3);

// console.log(newArray2);

// Cria uma nova instance de array a partir de um parâmetro array, ou seja, transforma o que foi passado para um array

// const div = document.querySelectorAll('div');
// const arr = Array.from(div);

// Métodos

// Push [+]

// const frutas = ['maça', 'acerola', 'banana'];
// const arLength = frutas.push('Mamão');

// console.log(arLength);
// console.log(frutas);


// POP [-] - Ele retira sempre o último do array

// const frutas = ['maça', 'acerola', 'banana'];
// const arLength = frutas.pop();

// Retorna o item removido

// console.log(arLength);
// console.log(frutas);

// Unshift[+/-]

// Faz com que adicione um ou mais elementos no inicio ou no fim do array e retorna o tamanho de um novo array

// const frutas = ['maça', 'acerola', 'banana'];
// const arLength = frutas.unshift('Mamão');

// Shift [-] -> Remove no ínicio do array e retorna o tamanho do novo tamanho

// const frutas = ['maça', 'acerola', 'banana'];
// const arLength = frutas.shift();

// console.log(frutas);

// Concat [+] Junta dois array em um único

// const frutas = ['maça', 'banana', 'mamão'];
// const salgados = ['coxinha', 'risoles', 'pastel'];

// const elementos = salgados.concat(frutas);

// console.log(elementos);

// Slice Retorna um novo aray 'fatiando' o array de acordo com o inicio e o fim

// const ar = [1, 2, 3, 4, 5];

// console.log(ar.slice(0, 2)); // Da posição 0 até a 2 - 2
// console.log(ar.slice(2)); // A partir da posição 2
// console.log(ar.slice(-1)); // Retorna do ultimo elemento
// console.log(ar.slice(-3)); // Retorna o ultimos 3

// Splice -> Não é imutavel e ao contrário do 'slice' remove o(s) elemento(s) 

const ar = [1, 2, 3, 4, 5];

console.log(ar.splice(2));  
console.log(ar.splice(0, 0, 'first')); // Adiciona na posição 0
console.log(ar);
