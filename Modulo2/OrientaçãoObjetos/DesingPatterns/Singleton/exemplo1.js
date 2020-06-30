function myFunction(){
    if(!myFunction.instance){
        myFunction.instance = this;
    }

    return myFunction.instance;
}

const f =  myFunction.call({ name: "Gustavo" });

const f2 =  myFunction.call({ name: "Francisca" });

console.log(f);
console.log(f2);

// Se por acaso tentar mudar a instance da função, irá retornar a mesma instance

