let a = 10
let b = 20
let c = null
//document.write('h1')

document.write('a:' + a + '<br/>')
document.write('b:' + b + '<br/>')
document.write('c:' + c + '<br/>')

document.write('<hr/>')

c = a
a = b
b = c 
c = null

document.write('a:' + a + '<br/>')
document.write('b:' + b + '<br/>')
document.write('c:' + c + '<br/>')
