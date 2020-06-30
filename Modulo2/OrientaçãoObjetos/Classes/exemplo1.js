'use String';

class Pessoa{
    constructor(name, age){
        this.nameP = name;
        this.ageP = age;
    }

    getDados(){
        return `${this.nameP}, ${this.ageP}`;
    }
}

const Gustavo = new Pessoa('Gustavo', '20');

console.log(Gustavo.getDados());