var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //Após o clique não recarrega a página.

    var form = document.querySelector('#form-adiciona');
    // Capturando o valor do form
    var paciente = obtemPacientedeFormulario(form);



    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        // var mesagemErro = document.querySelector("#mensgem-erro")
        exibeMensagensDeErro(erros);
        return;
    }

    function adicionaPacienteNaTabela(paciente) {
        //var pacienteTr = montaTr(paciente);
        //Criando colunas
        var pacienteTr = montaTr(paciente);
        //Populando na tabela
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }

    /*
        if (!validaPaciente(paciente)) {
            alert("Peso Inválido");
            return;
        }
    */


    adicionaPacienteNaTabela(paciente);
    //LIMPAR CAMPOS AUTOMATICAMENTE
    form.reset();

    var limpaul = document.querySelector("#mensagens-erro");
    limpaul.innerHTML = "";
})

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";
    erros.forEach(function (erro) {
        //criando lista
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco!");
    }

    if (!validaPeso(paciente.peso)) erros.push("Peso é Inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é Inválida");

    if (paciente.gordura.length == 0) {
        erros.push("O percentuaçl não poder ser vazio!")
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não poe ser vazio!");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não poe ser vazio!");
    }
    return erros;

}

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
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
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