var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";
/* Utilizando tabela*/
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
    var paciente = pacientes[i];

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
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    /** Formula IMC: peso/(altura*altura) */

    if (!pesoEhValido) {
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido")
        /*
        paciente.style.color =  "white";
        paciente.style.backgroundColor = "red"
        */
    }

    if (!alturaEhValida) {
        console.log("Altura Inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido")
        /*
        paciente.style.color =  "white";
        paciente.style.backgroundColor = "red"
        */
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        console.log(imc);
        /** Enviando os dados para o HTML */

        tdImc.textContent = imc;
    }


}


function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0  && altura <=3.00){
        return true;
    }else{
        return false;
    }
}
function calculaImc(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);

    return imc.toFixed(2);

}

// função anonima

titulo.addEventListener("click", function(){
    console.log("Olha só, posso chaar a função!!! hehehe");
});

/*
titulo.addEventListener("click",mostraMessagem);


function mostraMessagem(){
    console.log("Fui Clicado!!!")
}
*/


