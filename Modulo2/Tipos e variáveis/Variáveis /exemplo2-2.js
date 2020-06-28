let test = 'example';

(() => {
    let test = 'valor função';
    console.log(`O valor dentro do bloco: "${test}"`);

    if(true){
        let test = 'valor if';
        console.log(`O valor dentro do bloco de if: "${test}"`);
    }

    console.log(`O valor após o bloco do if: "${test}"`);
})();

// O tipo 'let' respeita o bloco ao contrário do 'var'