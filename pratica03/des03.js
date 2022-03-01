var idade = Number(window.prompt('informe sua idade:'))

if(idade <= 14 ) {
    document.write('Criança')
}else if( idade >= 15 && idade < 30 ) {
    document.write('Jovem')
}else if (idade >= 30 && idade < 60) {
    document.write('Adulto')
} else{
    document.write('Idoso')
}

console.log(idade)