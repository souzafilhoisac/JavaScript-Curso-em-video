/*Vamos otimizar nosso sistema de autoescola!
Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa precisamos 
imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.
Parte do código já está pronto, agora é sua vez de utilizar o else para dar um feedback ao usuário!*/
var idade = 19

if (idade >= 18) {
    console.log("Você já pode dirigir!")
}else {
    console.log('Ops, você ainda não tem a idade mínima para dirigir!')
}