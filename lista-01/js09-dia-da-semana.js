/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = -1
var listaDias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada

if(typeof(entrada) != "number" || entrada <= 0 || entrada > 7) {
    console.log('Entrada inválida.')
} else {
    console.log(listaDias[entrada-1])
}
