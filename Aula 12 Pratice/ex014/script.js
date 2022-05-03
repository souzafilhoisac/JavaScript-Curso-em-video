function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundos = data.getSeconds()
tempo = setInterval(carregar)
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<strong>Bom dia! São: ${hora}h ${minuto}min ${segundos} segundos</strong>`
        img.src = 'manha.png'
        document.body.style.background = '#fdda45'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `<strong>Boa tarde! São: ${hora}h ${minuto}min ${segundos} segundos</strong>`
        img.src = 'tarde.png'
        document.body.style.background = '#d86615'
    } else {
        msg.innerHTML = `<strong>Boa noite! São: ${hora}h ${minuto}min ${segundos} segundos</strong>`
        img.src = 'noite.png'
        document.body.style.background = '#021623'
    }
}
