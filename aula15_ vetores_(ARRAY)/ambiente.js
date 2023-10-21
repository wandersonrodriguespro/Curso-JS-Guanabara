let num = [4,6,9,10];
num[4] = 20
num.push(32)
num.sort ()
console.log(`O vetor tem ${num.length} posições e suas posições são ${num}`)
console.log(`O primeiro valor de vetor é ${num[0]}`)

let vpos = 4
let pos = num.indexOf(vpos)

if (pos == -1) {
    console.log('Valor Não encontrado')
}else{
    console.log(`O valor ${vpos} está na posição ${pos}`)
}

