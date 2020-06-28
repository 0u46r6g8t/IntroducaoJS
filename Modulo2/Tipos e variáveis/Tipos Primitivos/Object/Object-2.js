const user = {
    name: 'Gustavo',
    lasName: ''
}

console.log('Propriedades do objeto user:', Object.keys(user));

console.log('\nValores das propriedades do objeto user:', Object.values(user));

console.log('\nListas de propriedades e valores: ', Object.entries(user));

// Mergear propriedades de objetos 
Object.assign(user, {fullName: 'Gustavo Silva Quieregato'});

console.log('\nAdicionando a propriedade FullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:20}));

// Previne todas as alterações em um objeto
const newObject = { foo: 'bar' };
Object.freeze(newObject);

newObject.foo = 'changes';
delete newObject.foo;

newObject.bar = 'foo';

console.log('\nVariável newObject após as alterações:', newObject);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Gustavo' };
Object.seal(person);

person.name = 'Gustavo Silva';
delete person.name;
person.age = 20;

console.log('\nVariável person após as alterações:', person);