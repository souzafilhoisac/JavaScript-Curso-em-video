function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')//surte o mesmo efeito do getelement, só que o query é mais atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO]Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 5) {
                //criança
                img.setAttribute('src', 'man1.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'man2.png')
            } else if (idade < 17) {
                //adolescente
                img.setAttribute('src', 'man3.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'man4.png')
            } else if (idade < 35) {
                //adulto
                img.setAttribute('src', 'man5.png')
            } else if (idade < 55) {
                //senhor
                img.setAttribute('src', 'man6.png')
            } else {
                //idoso
                img.setAttribute('src', 'man7.png')
            }        
        
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 5) {
                //criança
                img.setAttribute('src', 'woman1.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'woman2.png')
            } else if (idade < 17) {
                //adolescente
                img.setAttribute('src', 'woman3.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'woman4.png')
            } else if (idade < 35) {
                //adulto
                img.setAttribute('src', 'woman5.png')
            } else if (idade < 55) {
                //senhor
                img.setAttribute('src', 'woman6.png')
            } else {
                //idoso
                img.setAttribute('src', 'woman7.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}