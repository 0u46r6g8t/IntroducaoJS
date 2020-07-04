const asyncFunc = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(12345);
    }, 1000);
})

const simpleFunc = async () => {
    const data = await asyncFunc(); /* O await faz com que a função espere que
     outras promises sejam resolvidas primeiro */ 
    // throw new Error('Oh no!');

    // Faz com que os dados sejam resolvidos de forma sequencial 
    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    }); // Retorna uma promise já resovida 