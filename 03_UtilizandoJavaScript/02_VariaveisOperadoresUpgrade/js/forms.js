var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //Após o clique não recarrega a página.

    var form = document.querySelector('#form-adiciona');
    // Capturando o valor do form
    var paciente = obtemPacientedeFormulario(form);

    //Criando tabela no HTML
    //Criando uma linha 

    //Criando colunas
    var pacienteTr = montaTr(paciente);

    //Populando na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //LIMPAR CAMPOS AUTOMATICAMENTE
    form.reset();
})

function obtemPacientedeFormulario(form) {

    //Criando objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /* ANTES
    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
    AGORA

    var nomeTd = montaTd(paciente.nome, "info-nome");
    
    //Antes
    // var pesoTd = document.createElement("td");
    //Agora
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

  
    //Populando tabela no HTML
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    */

    //Inserindo infrmações nas células
    pacienteTr.appendChild( montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, clase) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(clase);

    return td;

}