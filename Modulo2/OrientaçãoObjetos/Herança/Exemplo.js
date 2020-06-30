'use String';

function cachorro(name, raca, morde){
    this.name = name;
    this.raca = raca;
    this.morde = morde;
}

cachorro.prototype.latir = function(){
    console.log("Au, Au!");
}

cachorro.prototype.morder = function(){
    if(this.morde === true){
        return this.latir();
    }else{
        console.log("....");
    }
}

const ViraLata = new cachorro("Bidu", "ViraLata", true);

ViraLata.morder();