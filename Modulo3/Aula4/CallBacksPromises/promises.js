const doSomethingPromise = () => new Promise((resolved, reject) => {
   
   //throw new Error('Algo deu errado!')

    try {
    setTimeout(function(){
        resolved('Firt Data');
    }, 1000);
   } catch (error) {
       console.log(error);
   }
});

const doOtherthisPromise = () => new Promise((resolved, reject) => {
    try {
        setTimeout(function(){
            resolved('Second Data');
        }, 1000);
    } catch (error) {
        console.log(error);
    }
});

/*doOtherthisPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Também é possível executar uma promise a partir de outra

// doSomethingPromise()
//     .then(data => { 
//         console.log(data.split(''));
//         return doOtherthisPromise();
//     })
//     .then(data2 => console.log(data2.split('')))
//     .catch(/*error => console.log('Ops...', error)*/);

// Status on Promises 
/**
 * Pedding
 * Fulfiled
 * Rejected
 * 
 * Para executar a promise é necessário utilizar o método then e passar o data 
 */

// É uma forma de lidar com programação sequêncial...

// Lida com promise em paralelo, apesar de que o resultado será exibido quando o processamento dar duas terminarem
//  Promise.all([doSomethingPromise(), doOtherthisPromise()]).then(data => {console.log(data)});

// Quem executar primeiro exibe o resultado
Promise.race([doSomethingPromise(), doOtherthisPromise()]).then(data => console.log(data));