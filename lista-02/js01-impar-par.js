/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

// Entrada
var entrada = [1,3,5,7,8]

var saida = []
let imparPar;


// gerar a lista de saida

for(let i = 0; i < entrada.length; i++){
    if(entrada[i] % 2 == 0){
        imparPar = "par"
    } else{
        imparPar = "ímpar"
    }
    saida.push(imparPar)
}

console.log(saida)
