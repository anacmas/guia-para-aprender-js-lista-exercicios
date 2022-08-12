/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = ('J').toUpperCase()

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada

var vogais = ['A', 'E', 'I', 'O', 'U']

if(vogais.includes(entrada)) {
    console.log('vogal')
} else {
    console.log('consoante')
}
