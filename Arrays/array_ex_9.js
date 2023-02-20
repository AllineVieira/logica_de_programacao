//Leia um vetor contendo letras de uma frase inclusive os espaços em branco. Retirar os espaços em branco do vetor e depois escreve-los.

let arr = ['M', 'e', 'u', ' ', 'n', 'o', 'm', 'e', ' ', 'é', ' ', 'A', 'l', 'l', 'i', 'n', 'e']

//let arrJoin = String(arr);
//console.log(arrJoin);

for(i=0; i < arr.length; i++){
    if(arr[i] === " ") {
        arr.splice(i, 1)
    }
}

let arrJoin = arr.join("");

console.log(arrJoin)
//ver como utilizar o splice (if > -1)