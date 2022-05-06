/*Precisamos criar um código que ajude os usuários a saber se podem ir ao banco. Sabemos que o banco está aberto em todos os os dias da semana, exceto em  finais de semana. Caso o usuário possa ir ao banco você deve exibir com console.log a seguinte mensagem: “Você pode ir ao banco”, caso contrário, "O banco está fechado, tente outro dia".
Para esse exercício leve em consideração as seguintes informações:
- Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.
- Você terá a seguinte variável no código: diaSemana
- Para esse exercício você deve usar na condição do if o operador && para juntar as condições lógicas junto ao operador diferente de(!=).*/
var diaSemana = 'sabado'

if(diaSemana!='sabado' && diaSemana!='domingo'){
    console.log('Você pode ir ao banco')
    }else{
        console.log('O banco está fechado, tente outro dia')
    }