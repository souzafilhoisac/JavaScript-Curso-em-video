/*Precisamos de um código que verifique a idade do usuário para ver se já tem idade mínima para adquirir carta de habilitação. Para isso, teremos uma variável nome que guarda um valor do tipo string, e uma variável idade que guarda um valor do tipo numérico.

O sistema deve cumprimentar o usuário independente da idade, o resultado seria assim:

Caso o usuário tenha idade mínima para dirigir imprima: 

“Olá, NOME_DO_USUARIO_AQUI”

”Você passou no nosso teste e já pode dirigir!”.

Caso o usuário não tenha a idade mínima para dirigir imprima somente o cumprimento:

“Olá, NOME_DO_USUARIO_AQUI”*/
let nome = "João"
let idade = 17
if (idade >=18){
    console.log('Olá, '+ nome+' '+'Você passou no nosso teste e já pode dirigir!');
} else {
    console.log('Olá, '+nome);}