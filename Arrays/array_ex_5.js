// Leia um vetor de 40 posições. Contar e escrever quantos valores pares ele possui.

let vetor = [];
let vetorPares = [];

for(i=0; i < 40; i++){
    vetor.push(i);
    if(vetor[i] % 2 == 0) {
        vetorPares.push(vetor[i])
    }
}

console.log(vetor);
console.log(vetorPares)
console.log(vetorPares.length);