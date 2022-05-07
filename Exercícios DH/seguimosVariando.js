/*Você deve criar uma função chamada somaDosPares  que irá receber um parâmetro que será 
um numero. Essa função deve retornar a soma de todos os números pares de 1 até o o valor 
que recebemos com parâmetros, incluindo ele proprio. Exemplo:
somaDosPares(6) // vai retornar 12
// pois será 2 + 4 + 6*/

function somaDosPares(numero){
    var soma = 0
    for (var i = 0; i <= numero; i++){
        if (i % 2 === 0){
            soma += i
        }
    }return soma
}

console.log(somaDosPares(17))