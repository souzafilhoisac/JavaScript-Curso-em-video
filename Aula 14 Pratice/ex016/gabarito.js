function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res');
//Variáveis que ligam os input para armazenar os dados que o usuario irá preencher
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //Primeira condição para caso o usuário não preencha os campos
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Transformando o tipo digitado em número
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
            //Validação caso o usuário preencha 0 no passo
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1f3c1}`
            //Condição para contar em ordem crescente e colocando emoji
        } else {
            for (let c = i; c>= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        //Por fim, caso a contagem seja em ordem decrescente
    }
}