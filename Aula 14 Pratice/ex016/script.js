function contar() {
    var strt = window.document.querySelector('div#inicio')
    var end = window.document.querySelector('div#fim')
    var walk = window.document.querySelector('div#passo')
    var res = window.document.querySelector('div#res')
        if (strt == null || end == null || walk == null) {
            res.innerHTML = 'Impossível contar'
        } else if(walk == 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
        }
    }git 