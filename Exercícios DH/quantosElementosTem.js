/*Bom, vamos ser você entendeu, queremos criar uma função que receba um array por 
parâmetro e retorne a seguinte frase: "Esse array tem X elementos" onde X deve ser 
a quantidade de elementos que o array tem. A função deverá se chamar quantosElementos.
*/

var nomes = ['amanda', 'elisa', 'isac', 'isis']

function quantosElementos(nomes){
    return 'Esse array tem '+nomes.length+' elementos'
}

console.log(quantosElementos(nomes))