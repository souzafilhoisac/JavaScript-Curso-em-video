let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}
console.log(`O valor 8 está na posição ${pos}`)