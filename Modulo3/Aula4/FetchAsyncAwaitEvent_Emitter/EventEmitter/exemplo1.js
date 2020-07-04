const EventEmitter = require('events');
const { resolve } = require('path');

class Users extends EventEmitter{
    userLogged(data){
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

// const emitter = new EventEmitter(); // Criando uma instancia do eventEmitter

// emitter.on('User logged', data => { // Criando um consumidor do event
//     console.log(data);
// });

// emitter.emit('User logged', { user: 'Gustavo Silva' }); // Emitindo o event

const users = new Users();

users.on('User logged', data => {
    console.log(data);
}); // O método 'on' faz com que possa logar mais de um por vez
// O método once faz com que só possa logar 1 única vez

users.userLogged({
    user: 'Gustavo Silva'
});

users.userLogged({
    user: 'Stefany Viveiros'
});