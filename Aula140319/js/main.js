
/* var nome = prompt("Qual é o nome do responsavel?");

document.getElementById('res').innerHTML = nome;



function fazerAcao(){
	var ingrediente = document.getElementById('ingrediente').value;
	var lista = document.getElementById('lista').innerHTML;

	lista = lista + "<li>"+ingrediente+"</li>";

	document.getElementById('lista').innerHTML = lista;
}

*/


function fazerAcao(){
	var n2=document.getElementById("n2").value;
	var n1=document.getElementById("n1").innerHTML;

	if(n2 == ""){
		alert("Insira um valor, campo em branco.");
		return false;
	}

	if (n2==n1) {
		alert("Valores IGUAIS");
	}
	else{
		alert("Valores Diferentes");
	}

	atualiza();
}

function atualiza(){
	//alert("oi");
	document.getElementById("n2").value = "";
	document.getElementById("n2").focus();

	var r = Math.floor(Math.random() * 100);
	document.getElementById("n1").innerHTML = r;

}


function handle()
{
	var botao = window.event.keyCode;

	//alert(keycode);

	if (botao == 13)
	{
		fazerAcao();
	}
}
