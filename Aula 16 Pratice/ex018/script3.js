let num = document.getElementById('txtn')
let fbox = document.getElementById('fullbox')
let res = document.getElementById('res')
let lista = []
    
function adicionar() {
    let n = Number(num.value);
    if (num.value.length == 0 || n > 100 || n < 0 || lista.indexOf(n) != -1) {
        window.alert('Valor inválido ou já apresentado na lista');
    } else {
        if (n >= 1 && n <= 100) {
            lista.push(n);
            let item = document.createElement('option');
            item.text = `O valor ${n} foi adicionado`;
            fbox.appendChild(item);
        }
    }
    num.value = ''
    num.focus()
}

function finalizar() {
        if (lista.length <= 0) {
            window.alert('Adicione valores antes de finalizar');
        } else {
            let maior = 0;
            let menor = 101;
            let soma = 0;
            for (let c = 0; c < lista.length; c++) {
                soma += lista[c]
            if (lista[c] > maior) {
                maior.push(lista[c]);
            } if (lista[c] < menor) {
                    menor.push(lista[c]);
                }
            }
            res.innerHTML = `O maior valor é ${maior}.<br>`;
            res.innerHTML += `O menor valor é ${menor}.<br>`;
            res.innerHTML += `A média dos valores digitados é ${soma/lista.length}.<br>`;
            res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`;
        }
}