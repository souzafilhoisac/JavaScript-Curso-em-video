function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    //Criação de variaveis para linkar os campos
    //let res = window.document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        //Primeira validação caso não seja inserido algum valor
        //res.innerText = "Digite um numero..."
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        //Agregando a função Number a variável, declarando variável para referenciar
        //Limpando o campo para uma possível segunda busca
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //Criando uma variável para fazer uma caixa de opções em no html
            item.value = `tab${c}`
            //Atribuição de valor a variável item mudando de acordo a variável c
            tab.appendChild(item)
            c++
            //colocando o item como elemento filho e incrementando a variavel c            
        }
      //  if (nu != 0){
        //    let tab = []
            //for (let i = 1; i <= 10; i++) {

                /*
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
            res.innerHTML = `${nu} x 1 = ${nu*1}</br>
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
  //  }

}