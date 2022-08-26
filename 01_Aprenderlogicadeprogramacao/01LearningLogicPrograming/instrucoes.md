## Consolidando seu conhecimento
Que tal uma revisão prática? Crie o arquivo mostra_idades2.html. Logo no começo, vamos inserir a definição das funções. Começamos pela pulaLinha:

<meta charset="UTF-8">
<script>

function pulaLinha() {
    document.write("<br>");
}
</script>COPIAR CÓDIGO
Logo abaixo vamos ter a segunda função, a mostra, que por sua vez faz uso da pulaLinha. Diferente da anterior, esta segunda recebe um parâmetro, que será a frase a ser apresentada no navegador:

<meta charset="UTF-8">
<script>

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
</script>COPIAR CÓDIGO
Lembre-se de colocar o código dentro da função, com um recuo sempre mais à direita e utilize o TAB do seu teclado para criar esse recuo. Esse processo é conhecido como indentação do código (neologismo do inglês to indent). É importante que a indentação esteja correta para facilitar a leitura do programa.

Após as duas funções declaradas, vamos utilizá-las no código para imprimir quantos anos tem cada um dos envolvidos:

<meta charset="UTF-8">
<script>

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var ano = 2019;
mostra("Eu nasci em : " + (ano - 25));
mostra("Adriano nasceu em : " + (ano - 26));
mostra("Paulo nasceu em : " + (ano - 32));

</script>COPIAR CÓDIGO
Vamos a alguns exercícios baseados no código acima.

1 - Altere sua função pulaLinha para que ela pule duas linhas! Isto é, faça dois <br>s.

2- Há uma tag HTML que também é interessante para separar um resultado do outro, a <hr>. Altere a função pulaLinha() para que ela escreva no navegador um <hr> entre os dois <br>s que você já fez.

3 - A fonte do nosso programa talvez ainda não seja adequada. Há uma tag HTML que se chama <big>. Faça com que a função mostra coloque a frase entre <big> e </big>.

4 - O que acontece se você esquecer a palavra function na hora de declarar uma de suas funções? E os parênteses na declaração da função pulaLinha? Faça o teste e veja as mensagens de erro no console JavaScript do Chrome.