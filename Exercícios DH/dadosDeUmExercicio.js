/*Em uma  academia estão cadastrando nome, idade e altura de vários usuários.
Um determinado treino exige os seguintes requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.
Crie uma função chamada maiorAlto. Essa função irá receber um array como parâmetro. Este array terá o nome na primeira posição, a idade na segunda posição e a altura em centímetros na terceira posição. Ela também deve retornar verdadeiro (true) caso o aluno atenda os requisitos, ou falso (false) caso contrário.
Exemplo:
maiorAlto(["João da Silva", 18, 170]) // retorna true
maiorAlto(["Arlete Moura", 17, 150]) // retorna false*/
function maiorAlto(array) {
    for (var i = 1; i <3;i++){
        if (array[1] >= 18 && array[2] >= 170){
            return true
        }
        else {
            return false
        }
    }
    
}