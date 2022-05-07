/*Você deverá criar uma função chamada moverItem que irá receber 2 arrays como 
parâmetros e deverá pegar o último elemento do primeiro array e adicioná-lo como 
um novo elemente no segundo array. Exemplo:
var arrayA = [ 1, 2, 3 ]
var arrayB = [ 4, 5 ]
moverItem(arrayA, arrayB)
// O arrayA terá os seguintes valores = [ 1 , 2 ]
// O arrayB terá os seguintes valores = [ 4, 5, 3 ]*/
//var arrayA = [1, 5, 5, 6, 1, 4, 8, 9]
//var arrayB = [8, 9, 5, 2, 6, 4]
function moverItem(arrayA, arrayB){
    arrayB.push(arrayA.pop())
    return arrayB
}

console.log(moverItem([1, 5, 5, 6, 1, 4, 8, 9], [8, 9, 5, 2, 6, 4]))