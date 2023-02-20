//Leia um vetor de 20 posições e em seguida um valor X qualquer. Seu programa devera fazer uma busca do valor de X no vetor lido e informar a posição em que foi encontrado ou se não foi encontrado.

let vetor = []

for(i=0; i < 20; i++){
    vetor.push(i)
}
console.log(vetor)

let encontrarValor = (valor) => {
    for(i=0; i < vetor.length; i++) {
        if(vetor[i] === valor) {
            console.log(`Número encontrado no índice ${vetor[i]}`);
            return;
        }
    }
    console.log("Cliente não existe")
}

encontrarValor(52)