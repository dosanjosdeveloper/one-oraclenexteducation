function pulaLinha(){
  //  document.write("<br>");
}

function escreva(msg){
//    document.write(msg);
//    pulaLinha();
    console.log(msg);
}

var sorteado = Math.round(Math.random() * 10);
var tentativa = 1;

while(tentativa <= 3){
    var chute = parseInt(prompt("Informe um número de 1 a 10: "));

    if(chute === sorteado){
        escreva("Parabés, você acertou!!! "+sorteado);
    }else{
        escreva("Sinto muito, mas você errou :(!!"+sorteado);
    }
}

