function contar() {
    var i = window.document.getElementById('i').value;
    var f = window.document.getElementById('f').value;
    var p = window.document.getElementById('p').value;
    var res = window.document.querySelector('div#res');
    if (i.length == 0 || f.length == 0 || p.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        var numberP = Number(p);
        if (numberP === 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            numberP += 1
        } else {
            var c = [];
            const numberF = Number(f);
            for (var s = Number(i); s <= numberF; s += numberP) {
                c.push(s)
            }
            res.innerHTML = `Contando2:</br> ${c}`
        }
    }
}