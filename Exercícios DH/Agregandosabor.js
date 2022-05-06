function agregandoSabor(ingredientes, novoingrediente){
    ingredientes.push(novoingrediente);
    return ingredientes;
}
agregandoSabor(ingredientes,'trigo')


function somaDosPares(numero){
    var soma = 0
    for (var i = 0; i <= numero; i++){
        if (i % 2 === 0){
            soma += i //perguntar sobre o sinal +=
        }
    }return soma
}