const array = ['Gustavo', 'Stefany', 'Walter'];

const gender = {
    MAN   : Symbol('MAN'),
    WOMAN : Symbol('WOMAN')
}

const persons = [
    {
        name    : 'Gustavo',
        age     : 20,
        gender  : gender.MAN
    },

    {
        name    : 'Stefany',
        age     : 22,
        gender  : gender.WOMAN
    },

    {
        name    : 'Walter',
        age     : 50,
        gender  : gender.MAN
    }
];

// Retorna a quantidade de itens de um array
console.log('Itens:', persons.length);

// Verifica se é array
console.log('A variável é um array?', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => persons.gender === gender.MAN);
console.log('Pessoas do array do sexo masculino: ', mens);

// Retorna um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript\n';
    return person;
});

console.log('\nPessoas com a adição do course:', personWithCourse);

// Transforma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
/*

    Recebe 0 pois irá ser um number

*/
console.log(`Soma de idade das pessoas`, totalAge);

// Juntando operações
const totalEventAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEventAges);