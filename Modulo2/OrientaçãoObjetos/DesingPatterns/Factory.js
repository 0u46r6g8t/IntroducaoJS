function fake(custom){
    return {
        name: '',
        ...custom
    };
}

const p = fake({name: 'Gustavo', age: 20});

console.log(p.name);