//Leia um vetor de 10 posições e acumule os valores do primeiro elemento no segundo, deste no terceiro e assim por diante. Ao final, escreva o vetor obtido.

let vetor = [];

for(a=0; a < 10; a++){
    vetor.push(a);
}
console.log(vetor);























/*for(let i=0; i < vetor.length; i++){
    let b = 1;
    let c = 2;
    vetor.splice(c, 1, (vetor[b] + vetor[c]));
    b++;
    c++;
}
console.log(vetor)*/

/*
vetor[1] = vetor[0] + vetor[1];
vetor[2] = vetor[1] + vetor[2];
vetor[3] = vetor[2] + vetor[3];
console.log(vetor);

for(let primeiroIndice=0; primeiroIndice < vetor.length; primeiroIndice++){
    vetor.splice(vetor[primeiroIndice], 1, (vetor[primeiroIndice] + vetor[primeiroIndice + 1]));   
}

for(let i=0; i < vetor.length; i++){
    let b = 1;
    let c = 2;
    vetor.splice(vetor[c], 1, (vetor[b] + vetor[c]));
    b++;
    c++;
}
for(i=0; i < vetor.length; i++){
    let j = 1
    vetor[i] = vetor[j] + vetor[i];
    j++
}

console.log(vetor);

let i = 1; //ultimo numero
let j = 0; //penultimo numero

for(n=0; n < vetor.length; n++){
    let temporaria = vetor[i];
    let proximo = vetor[i] + vetor[j];
    vetor[i] = proximo;
    vetor[j]= temporaria;

}*/
