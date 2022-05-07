/*Queremos criar uma função chamada agregandoSabor que irá receber um array com ingredientes
e um novo item para ser adicionado. Seu trabalho será pegar esse parâmetro e adicioná-lo ao 
array de ingredientes. Por fim, não esqueça de retornar o array com as novas alterações.*/
var ingredientes = ['arroz','feijao','macarrao']
function agregandoSabor(ingredientes, novoingrediente){
    ingredientes.push(novoingrediente);
    return ingredientes;
}
console.log(agregandoSabor(ingredientes, 'Tomate'))