function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()+'h'+ data.getMinutes()+'min'+ data.getSeconds()+'segundos'
tempo = setInterval(carregar)
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<strong>Bom dia! São: ${hora}</strong>`
        img.src = 'manha.png'
        document.body.style.background = '#fdda45'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `<strong>Boa tarde! São: ${hora}</strong>`
        img.src = 'tarde.png'
        document.body.style.background = '#d86615'
    } else {
        msg.innerHTML = `<strong>Boa noite! São: ${hora}</strong>`
        img.src = 'noite.png'
        document.body.style.background = '#021623'
    }
}
