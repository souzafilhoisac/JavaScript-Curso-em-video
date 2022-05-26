function contar() {
    var i = window.document.getElementById('i').value;
    var f = window.document.getElementById('f').value;
    var p = window.document.getElementById('p').value;
    var res = window.document.querySelector('div#res');
    if (i.length == 0 || f.length == 0 || p.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else  {
        var numberP = Number(p);
        var numberI = Number(i)
        var numberF = Number(f)
        res.innerHTML = 'Contando: <br>'
        if (numberP <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            numberP = 1
        } if (numberI < numberF) {
            //var c = [];
            for (var s = numberI; s <= numberF; s += numberP) {
                //c.push(s)
                res.innerHTML += ` ${s} \u{1F449}`
            }
            res.innerHTML += `\u{1f3c1}`
        } else {
            for (var s = numberI; s >= numberF; s -= numberP) {
                res.innerHTML += ` ${s} \u{1F449}`
             }
             res.innerHTML += `\u{1f3c1}` 
        }
    }
}