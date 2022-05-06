/*Utilize a condicional if/else para verificar a variável estrangeiro que guarda um valor booleano. Caso o valor seja verdadeiro solicite o Registro Nacional de Estrangeiros(RNE). Se o valor for falso solicite o Cadastro de Pessoa Física (CPF).
Mensagem para estrangeiro: “Você poderia apresentar seu RNE, por favor?”
Mensagem para brasileiro: “Você poderia apresentar seu CPF, por favor?”*/
let estrangeiro = true;

if(estrangeiro){
  console.log('Você poderia apresentar seu RNE, por favor?')
}else{
  console.log('Você poderia apresentar seu CPF, por favor?')
}