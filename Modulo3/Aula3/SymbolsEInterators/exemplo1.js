// Symbols

// São maneiras de gerar um identificador único

// const uniqued1 = Symbol('Hello');
// // Symbols nuncaa serão iguais 

// const obj = {
//     [uniqued1]: 'Array'
// }

// console.log(obj);

// Well know symbols

Symbol.interator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4]

// Forma Antiga [-]
// const it = arr[Symbol.iterator]();

// while(true){
//     let { value, done } = it.next();

//     if(done){
//         break
//     }
//     console.log(value);
// }


// Forma nova depois do ES6

// for(let value of arr){
//     console.log(value);
// }

console.log(arr[Symbol.iterator]().next());

const obj = {
    value: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.value[i -1],
                    dona: i > this.value.length 
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());