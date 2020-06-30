let logging = true;

function decoratorFunction(fn){
    return logging && fn();
}

function soma(a, b){
    return a + b;
}

console.log(decoratorFunction(() => soma(2, 4)));

// Só irá conseguir executar a função se por acaso estiver logado!