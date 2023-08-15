// Código da calculadora

function addDisplay(value) {
  const display = document.querySelector("#display");
  display.value += value;
}
function clean() {
  document.querySelector("#display").value = "";
}
function sumOpe() {
  const display = document.querySelector("#display").value;
  const result = eval(display);
  document.querySelector("#display").value = result;
}
const containerElement = document.querySelector("#Calculate-ope");
containerElement.style.display = "none";

// Código da calculadora

/*                    */

// Código funções do dsiplay Header

function toggleContainerDisplay() {
  if (containerElement.style.display === "none") {
    containerElement.style.display = "block";
    containerElement3.style.display = "none";
    containerElement2.style.display = "none";
  } else {
    containerElement.style.display = "none";
  }
}

const containerElement2 = document.querySelector("#Calculate-ope2");
containerElement2.style.display = "none";

function toggleContainerDisplay2() {
  if (containerElement2.style.display === "none") {
    containerElement2.style.display = "block";
    containerElement.style.display = "none";
    containerElement3.style.display = "none";
  } else {
    containerElement2.style.display = "none";
  }
}

/*                    */
const containerElement3 = document.querySelector("#Calculate-ope3");
containerElement3.style.display = "none";

function toggleContainerDisplay3() {
  if (containerElement3.style.display === "none") {
    containerElement3.style.display = "block";
    containerElement.style.display = "none";
    containerElement2.style.display = "none";
  } else {
    containerElement3.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////
// Calculadora de Media

function calculate() {
  const num1 = Number(document.querySelector("#nota1").value);
  const num2 = Number(document.querySelector("#nota2").value);
  const result = document.querySelector("#result2");

  if (num1 == "" || num2 == "") {
    document.getElementById("result2").textContent =
      "Insira valores numéricos válidos.";
    return;
  }

  const media = (num1 + num2) / 2;
  result.textContent = `Sua média foi: ${media}`;
  document.querySelector("#nota1").value = "";
  document.querySelector("#nota2").value = "";
}
///////////////////////////////////////////////////////////////////////
// Calcular Imc

function calculateIMC() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    document.getElementById("result").textContent = "Insira valores válidos.";
    return;
  }

  const bmi = weight / (height * height);
  const bmiFormatted = bmi.toFixed(0);

  let resultText = `Seu IMC é ${bmiFormatted} `;

  if (bmi < 18.5) {
    resultText += "Você está abaixo do peso.";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultText += "Seu peso está normal.";
  } else {
    resultText += "Você está acima do peso.";
  }
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").textContent = resultText;
}
