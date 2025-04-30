function button() {
  const numero = Number(document.getElementById("fibonacci").value);
  if (!isNaN(numero) && numero > 0) {
    let num1 = 0;
    let num2 = 1;
    let resultado = "Resultado: 0";




    for (let i = 1; i < numero; i++) {
        resultado = `${resultado}, ${num2}`;
        let acumulado = num1 + num2;
        num1 = num2;
        num2 = acumulado;

    }
    document.getElementById("resultado").innerHTML = resultado;
  } else {
    document.getElementById("resultado").textContent = "Ingrese un número válido";
  }
}
