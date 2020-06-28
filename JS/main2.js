function a(n1, n2){
	return n1 + n2;
}

function clique(){
	document.getElementById('ola').innerHTML = "Obrigado";
}

function redirect(){
	window.location.href = "https://google.com";
}

function trocar(element){
	element.innerHTML = "Uiiii <3";
	
}

function voltar(element){
	element.innerHTML = "ola";	
}

function load(){
	alert("Pagina carregada");
}

function change(element){
	alert(element.value);
}
console.log(a(10,30));