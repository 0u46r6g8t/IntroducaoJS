function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here'
}

// Funções também são objetos 
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros 
const logValue = value => console.log(value);
const logResultFn = fnParams => console.log(fnParams());

logResultFn(fn);

// Receber e retornar funções 
const controlerFnExec = fnParams => allowed => {
    if(allowed){
        fnParams();
    }
}

const handler = controllerFnExec(fn);

handler(true); // Executará a função fn
handler(); // Não executará a função fn

// ControllerFnExec como função
function controllerFnExec(fnParams){
    return function(allowed){
        if(allowed){
            fnParams();
        }
    }
} 