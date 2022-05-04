function contar() {
    var i = window.document.getElementById('i');
    var f = window.document.getElementById('f');
    var p = window.document.getElementById('p');
    var res = window.document.querySelector('div#res');
        if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
            res.innerHTML = 'Impossível contar!'
        } else if (p.value == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p += 1
    } else {
        for (var s = i; s <= f; s += p) {
            var c = [];
            c.push(i+=p)
            res.innerHTML = `Contando:</br> ${c}`
        }
    }
}