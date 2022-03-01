
/*if(2 == 2 && 3 >= 1 || 'a' == 'b') {
    document.write('verdadeiro')
}else {
    document.write('false')
}*/

var nota = prompt('Digitr a nota do aluno:')
var faltas = prompt('Digite a quantidade de faltas')

var media = 7
var faltas_maximas = 15

if( nota >= media && faltas <= faltas_maximas){
    document.write('Aprovado!')
} else {
    document.write('Reprovado!')
}

var resultado = (nota >= media && faltas <= faltas_maximas) ?  'Aprovado' : 'reprovado' 
document.write('resultado')