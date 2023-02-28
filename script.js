function calculaIMC(altura, massa, resultado, valorAltura, valorMassa, imc) {
    altura = document.querySelector("input#article-imc-input-height");
    massa = document.querySelector("input#article-imc-input-weight");
    resultado = document.querySelector("span#resultado");
    valorAltura = Number(altura.value);
    valorMassa = Number(massa.value);
    imc = valorMassa / (valorAltura * valorAltura);

    if (imc < 18) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e, segundo a OMS, você está abaixo do peso.`;
    } else if ((imc > 18) && (imc < 25)) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e, segundo a OMS, você está no seu peso normal.`;
    } else if ((imc > 25) && (imc < 30)) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e, segundo a OMS, você está com excesso de peso.`;
    } else if ((imc > 30) && (imc < 35)) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e, segundo a OMS, você está com obesidade classe I.`;
    } else if ((imc > 35) && (imc < 40)) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e, segundo a OMS, você está com obesidade classe II.`;
    } else if (imc >= 40) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} e, segundo a OMS, você está com obesidade classe III.`;
    } else {
        resultado.innerHTML = "Por favor, preencha os campos em branco para obter seu resultado.";
    }
};
