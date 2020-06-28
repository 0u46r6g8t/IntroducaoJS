let user = {
    name: "Gustavo"
};

// Alterando propriedade
user.name = 'Stefany';
user['name'] = 'Gustavo2';

const prop = 'name';
user[prop] = 'Stefany2';

// Criando uma propriedade
user.lastName = 'Quieregato';

// Deletando uma propriedade;
// delete user.name;

console.log(user);