// Leia dois vetores de 20 posições e calcule um terceiro vetor contendo, nas posições pares os valores do primeiro e nas posições impares os valores do segundo.

let vetorA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];

let vetorB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let vetorC = [];

for(a=0; a < 20; a++){
    vetorC.push(a)
}
console.log(vetorC)

for(i=0; i <= vetorC.length; i++){
    if(vetorC[0] || (vetorC[i] % 2) == 0) {
        vetorC.splice(vetorC[i], 1, vetorA[i])
    } else {
        vetorC.splice(vetorC[i], 1, vetorB[i])
    }
}
//vetorC.splice(vetorC[0], 1, vetorA[0])

console.log(vetorC)

