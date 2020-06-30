// in 
// something in somethingItens

// Array
var arvores = new Array('Gustavo', 'Enzo', 'Walter', 'Stefany');
0 in arvores;
3 in arvores;
6 in arvores; // Retorna false

"Pi" in Math;
var minhaString = new String("coral");
"length" in minhaString;

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro;
"modelo" in meuCarro;

// intaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 7, 8);

if(dia instanceof Date){
    // Code Here
}