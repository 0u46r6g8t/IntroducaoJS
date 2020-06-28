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

