/*Leia um vetor de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.*/

/*let vetorInicial = Array(16);
let n = 0;
let i = 0;

while(i < vetorInicial.length){
    vetorInicial[i] = n;
    n = n + 1;
    i = i + 1;
}

// esse aqui pega os primeiros numeros e coloca na temporaria ou seja temp = a

let a = 0;
let temporaria1 = Array(8);
while(a < 8){
    temporaria1[a] = vetorInicial[a];
    a = a + 1;
}

let b = 8;
let c = 0;
let temporaria2 = Array(8)
while(b < 16){
    temporaria2[c] = vetorInicial[b];
    b = b + 1;
    c = c + 1;
}

let d = 0;
let x = 0;
while(d < 8){
    vetorInicial[d] = temporaria1[x];
    d = d + 1;
    x = x + 1;
}

let e = 8;
let y = 0;
while(e < 16){
    vetorInicial[e] = temporaria2[y];
    e = e + 1;
    y = y + 1;
}

console.log(vetorInicial)*/


//a = temp; b = a; temp = b; 
//preciso de uma variavel temporaria pra guardar os 8 primeiros valores de trocarPosicoes
//preciso declarar pro programa que os 8 primeiros vao ser iguais a temporaria
//depois os 8 ultimos vao ser os 8 primeiros
//temporaria vai ser os 8 ultimos
//como que eu pego varios numeros de uma array? será que crio uma função?


let vetor = Array(16);

let contador = 0;
let numerador = 0;

while(contador < 16){
    vetor[contador] = numerador;
    contador = contador + 1;
    numerador = numerador + 1;
};
console.log(vetor);

// armazenar 8 primeiros numeros na temporaria - temp = a
let temporaria = Array(8);
let contadorPrimeiros = 0;
let numeradorPrimeiros = 0;

while(contadorPrimeiros < 9){
    temporaria[contadorPrimeiros] = vetor[contadorPrimeiros];
    contadorPrimeiros = contadorPrimeiros + 1;
}
console.log(temporaria);

// armazenar 8 ultimos nos 8 primeiros - a = b
let contadorUltimos = 8;
let contadorPrimeiros2 = 0;
while((contadorUltimos > 7) && (contadorUltimos < 16)){
    vetor[contadorPrimeiros2] = vetor[contadorUltimos];
    contadorPrimeiros2 = contadorPrimeiros2 + 1;
    contadorUltimos = contadorUltimos + 1;
}
console.log(vetor)

// armazenar temporaria no b - b = temporaria

let contadorUltimos2 = 8;
let contadorTemporaria = 0;
while(contadorUltimos2 < 16){
    vetor[contadorUltimos2] = temporaria[contadorTemporaria];
    contadorUltimos2 = contadorUltimos2 + 1;
    contadorTemporaria = contadorTemporaria + 1;
}
console.log(vetor)