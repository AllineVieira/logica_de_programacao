/*Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva*/
/*let vetor = new vetor(10);

for(i = 0; i < 11; i++) {
    vetor.push["batata"]
}

console.log(vetor[0])*/

//const arr = Array(10).fill("batata"); eu ainda não quero preencher console.log(arr);

const vetor = Array(10);

let n = 0
let i = 0

//como que eu limito no array e não no n?
while(n < 30) {
    n = n + 1;
    if(n % 2 != 0 && i < 10){
        vetor[i] = n;
        i = i + 1;
    }
}





console.log(vetor)