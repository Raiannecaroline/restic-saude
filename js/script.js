// Criei uma função em JavaScipt pega os dados introduzidos pelo usuário e faz o calculo e devolve o resultado ao mesmo
function calcularIMC() {
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      alert("Por favor, insira valores válidos.");
      return;
  }
  
  var imc = peso / (altura * altura);
  var resultado = document.getElementById('resultado');
  
  var classificacao;
  
  if (imc < 18.5) {
      classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
  } else {
      classificacao = "Obesidade";
  }
  
  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}