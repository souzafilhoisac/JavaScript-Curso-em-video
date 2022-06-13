function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1 ; c--) {
        fat *= c
    }
    return fat
}

//console.log(fatorial(5))
     
// 5! = 5 x 4 x 3 x 2 x 1 = 120

const total = function (A, B){
    let somaTot = 0;
    if(A < 0 || B < 0 || !B || typeof A !== 'number' || typeof B !== 'number'){
        return 'Digite dois números inteiros positivos.'
    } else if(A === B){
        return A
    } else if(A < B){
        for (let i = A; i <= B; i++){
            somaTot += i;
        }
    } else{
        for (let i = B; i <= A; i++){
            somaTot += i;
        }
    }
    return parseInt(somaTot)
};

console.log(total(1.3, 3.5))