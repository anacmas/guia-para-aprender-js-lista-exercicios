/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = ("s").toUpperCase().toString()

var lista = ["YES", "Y", "SIM", "S", "1", "👍"]

if(lista.includes(entrada)){
    console.log("true")
} else {
    console.log("false")
}
