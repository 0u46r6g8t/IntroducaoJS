// Exemplo 1

/*function fn(){
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}*/

function fn(){
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}

fn();