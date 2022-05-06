/*Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número fornecido no segundo parâmetro da função e retorna um novo array apenas com esses números.
Exemplo:
numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5
resposta = [10, 7, 128, 42, 300]*/
var array = [10, 4, 7, 128, 42, -1, 0, 300, -5]
var num = 5

function maiorQueNum(array, num)
{
var newArray = [];
for(var i = 0; i < array.length; i++){
if(array[i] > num){
newArray.push(array[i])
}
}
return newArray
}