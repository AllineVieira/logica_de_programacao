//Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que possuírem valores negativos.

let vetor = [];

for(i=20; i > - 20; i--){
    vetor.push(i);
}
console.log(vetor);

for(a=0; a < vetor.length; a++){
    if (vetor[a] < 0) {
        vetor[a] = 0
    }

}

console.log(vetor);
