var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";
/* Utilizando tabela*/
var paciente = document.querySelector('#primeiro-paciente');
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente);
console.log(tdPeso);
console.log(peso);

console.log(tdAltura);
console.log(altura);
var tdImc = paciente.querySelector('.info-imc');
var pesoEhValido = true;
var alturaEhValida = true;

/** Formula IMC: peso/(altura*altura) */
if (peso < 0 || peso > 900) {
    console.log("Peso Inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido!";
}

if (altura < 0 || altura > 2) {
    console.log("Altura Inválida!");
    alturaEhValida = false;
    tdImc.textContent ="Altura Inválida!";
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    console.log(imc);
    /** Enviando os dados para o HTML */
    
    tdImc.textContent = imc;
}





