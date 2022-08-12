/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = "abacate"
var entradaStr = entrada.toString()
// gere a variável invertido corretamente



var invertido = entradaStr.split("").reverse().join("")


console.log(invertido)
