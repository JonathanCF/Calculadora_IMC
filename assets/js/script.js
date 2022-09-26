
function calcular(event) {
	event.preventDefault();

let nomeInput = document.getElementById('nome').value;
let alturaInput = document.getElementById('altura').value;
let pesoInput = document.getElementById('peso').value;
let resultado = document.getElementById('content-result');
let boxResult = document.getElementById('resultado')
let tableResult = document.getElementById('table')

let imc = (pesoInput / (alturaInput * alturaInput));


	if (imc < 18.5) {
		resultado.innerHTML = `Olá ${nomeInput}, seu resultado foi: ${imc.toFixed(2)} você está na classificação IMC:  MAGREZA`;
	}else if(imc < 24.9){
		resultado.innerHTML = `Olá ${nomeInput}, seu resultado foi: ${imc.toFixed(2)} você está na classificação IMC:  NORMAL`;
	}else if (imc < 29.9){
		resultado.innerHTML = `Olá ${nomeInput}, seu resultado foi: ${imc.toFixed(2)} você está na classificação IMC:  SOBREPESO`;
	}else if (imc < 39.9){
		resultado.innerHTML = `Olá ${nomeInput}, seu resultado foi: ${imc.toFixed(2)} você está na classificação IMC:  OBESIDADE`;
	}else if (imc > 39.9){
		resultado.innerHTML = `Olá ${nomeInput}, seu resultado foi: ${imc.toFixed(2)} você está na classificação IMC:  OBESIDADE GRAVE`;
	}

	resultado.classList.remove('hide')
	table.classList.remove('hide')
}
