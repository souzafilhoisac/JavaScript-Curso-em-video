/*Até agora, aprendemos declarar funções. Isto significa : escrever o código que elas vão 
executar, mas nós nunca os executámos, não é mesmo?
Vejamos o seguinte exemplo.
Aqui declaramos a função dobro.
function dobro(numero) {
    return 2 * numero;
 }
 Com isto temos agora a função dobro, uma função que quando a executamos (invocando) 
 devolverá o dobro do número que passamos a ela.
Agora, para utilizar essa função basta:
dobro(2)
Com esse comando vamos executar o código que escrevemos anteriormente. A função dobro 
vai ser chamada e o valor 2 vai ser passado como parâmetro. A função dobro vai tomar 
este valor (2) e vai devolver este valor * 2.
Se quiséssemos mostrar esse resultado no console(no Playground é a janela abaixo do 
    botão Executar resposta que diz Terminal) teríamos de o imprimir utilizando uma 
    função JavaScript chamada console.log da seguinte forma:
console.log(dobro(2))
Vamos ver se você entendeu, deixamos declarada a função quadruplo, que recebe um numero 
como parâmetro e o multiplica por 4. Queremos que você execute essa função, passando o 
valor 5, e imprima no console o resultado dela.*/

function quadruplo(numero) {
    return 4* numero;
 }
 
 console.log(quadruplo(5))