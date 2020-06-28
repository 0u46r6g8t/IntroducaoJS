var teste = 'example';

(() => {
    var teste;
    console.log(`Valor dentro da função "${teste}"`);

    if(true){
        teste = 'example';
        console.log(`O valor dentro do if ${teste}`);
    }

    console.log(`O valor após a execução do if ${teste}`);
})();

// O var não respeita o escopo de bloco
