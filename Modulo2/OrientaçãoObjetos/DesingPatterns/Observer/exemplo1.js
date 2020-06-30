class Observable{
    constructor(){
        this.observers = [];
    }

    subscrible(f){
        this.observers.push(f);
    }

    notify(data){
        this.observers.forEach(fn => fn(data));
    }

    unsubscribe(fn){
        this.observers =this.observers.filter(obs => obs !== fn);
    }
}

const c = new Observable();

const logData = data => console.log(`Sub 1: ${data}`);
const logData2 = data => console.log(`Sub 2: ${data}`);
const logData3 = data => console.log(`Sub 3: ${data}`);

c.subscrible(logData);
c.subscrible(logData2);
c.subscrible(logData3);

c.notify('Notified');

c.unsubscribe(logData2);

c.notify('Notified 2');

// Verifica a lista e notifica todos os objetos dentro dela do que aconteceu