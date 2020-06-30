var partes = ['ombro', 'joelho'];
var musica = ['cabeça', ...partes, 'e', 'pés'];

function fn(x, y, z) {console.log(`${x} - ${y} - ${z}`);}
var args = [0,1,32313213];
fn(...args);