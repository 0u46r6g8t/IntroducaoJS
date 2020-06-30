// Criando um objeto symbol

const symbol = Symbol();
const symbol2 = Symbol();

// Symbol são únicos 
console.log('Symbol são únicos e iguais: ', symbol === symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Gustavo',
    [nameSymbol2]: 'Outro nome',
    lasName: 'Gustavo Silva Quieregato'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto 
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user));

// Criando um enum
const directions = {
    UP      : Symbol('UP'),
    DOWN    : Symbol('DOWN'),
    LEFT    : Symbol('LEFT'),
    RIGHT   : Symbol('RIGHT')
};

console.log(directions);w
