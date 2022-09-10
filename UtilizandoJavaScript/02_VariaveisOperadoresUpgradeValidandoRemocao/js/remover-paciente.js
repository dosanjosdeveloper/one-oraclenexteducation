var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);
/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        console.log("Fui clicado com duplo click!!!");
        this.remove();
    })
})
*/

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event) {
    //console.log(event.target);
    //alert("Está linha será removida?");
    //
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    },500)

});