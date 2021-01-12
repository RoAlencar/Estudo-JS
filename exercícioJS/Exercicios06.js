/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

 function jurosSimples(capitalInicial,taxaJuros,tempoAplicado) {
        return Juros = capitalInicial + (capitalInicial + taxaJuros * tempoAplicado)
 }

 function jurosComposto(capitalInicial,taxaJuros,tempoAplicado) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicado     
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));