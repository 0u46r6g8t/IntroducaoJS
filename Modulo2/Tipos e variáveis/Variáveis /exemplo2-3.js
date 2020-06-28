const test = 'Valor fora do bloco';

(() => {
    const test = 'Valor dentro do bloco';
    console.log(`O valor dentro dentro da função é: "${test}"`);

    if(true){
        const test = 'Valor dentro do if';
        console.log(`O valor dentro do if: "${test}"`);
    }
    
    console.log(`O valor após o bloco do if: "${test}"`);
})();