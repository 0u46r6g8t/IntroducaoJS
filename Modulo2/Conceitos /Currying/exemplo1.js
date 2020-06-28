function soma(a){
	return function(b){
		return a + b;
	}
}

const soma2 = soma(2);

console.log(soma2(23));
console.log(soma2(2323));
console.log(soma2(2));
console.log(soma2(22313));