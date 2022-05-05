function gerar() {
    let num = window.document.getElementById('num').value
    let res = window.document.getElementById('res')
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        const nu = Number(num)
        if (nu != 0){
            let tab = []
            for (let i = 1; i <= 10; i++) {
                tab.push(i)
                res.innerText = `${nu} x ${tab[0]} = ${nu*tab[0]}
                ${nu} x ${tab[1]} = ${nu*tab[1]}
                ${nu} x ${tab[2]} = ${nu*tab[2]}
                ${nu} x ${tab[3]} = ${nu*tab[3]}
                ${nu} x ${tab[4]} = ${nu*tab[4]}
                ${nu} x ${tab[5]} = ${nu*tab[5]}
                ${nu} x ${tab[6]} = ${nu*tab[6]}
                ${nu} x ${tab[7]} = ${nu*tab[7]}
                ${nu} x ${tab[8]} = ${nu*tab[8]}
                ${nu} x ${tab[9]} = ${nu*tab[9]}`
            }
            /*res.innerHTML = `${nu} x 1 = ${nu*1}</br>
            ${nu} x 2 = ${nu*2}</br>
            ${nu} x 3 = ${nu*3}</br>
            ${nu} x 4 = ${nu*4}</br>
            ${nu} x 5 = ${nu*5}</br>
            ${nu} x 6 = ${nu*6}</br>
            ${nu} x 7 = ${nu*7}</br>
            ${nu} x 8 = ${nu*8}</br>
            ${nu} x 9 = ${nu*9}</br>
            ${nu} x 10 = ${nu*10}</br>`*/
        }
    }

}