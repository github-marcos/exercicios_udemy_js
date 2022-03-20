/*var data = new Date()
//add e remover dias:
document.write(data.toString())
data.setDate(data.getDate() + 720)
document.write('<hr')
document.write(data.toString())
document.write('<br> <br> <hr>')

//add e remover meses:
document.write(data.toString())
data.setDate(data.getMonth() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<br> <br> <hr>')

//add e remover anos:
document.write(data.toString())
data.setDate(data.getFullYear() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<br> <br> <hr>')*/


var data1 = new Date(2022, 0, 15)

var data2 = new Date(2022, 1, 23)

document.write(data1.toString())
document.write('<hr>')
document.write(data2.toString())

document.write('<br> <br> <hr>')
//converter datas para algo que possamos calcular
document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())
//encontrar a quantidade de milissegundos entre data1 e data2
document.write('<br> <br> <hr>')
var milissegundos_entre_datas = Math.abs( data2.getTime() - data1.getTime())
document.write(milissegundos_entre_datas)
document.write('<br>')
var milissegundos_por_dia = (1 * 24 * 60 * 60 * 1000)
document.write('1 dia tem:' +  milissegundos_por_dia + ' milissegundos')
document.write('<br> <br> <hr>')
document.write('Adiferença entre data1 e data2 é de ' + Math.ceil( milissegundos_entre_datas / milissegundos_por_dia) + ' dias')