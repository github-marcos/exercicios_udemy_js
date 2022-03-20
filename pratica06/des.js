var num1 = Number(window.prompt('Digite um número'));

var operação = window.prompt('Digite a operação').toLowerCase()

var num2 = Number(window.prompt('Digite outro número'))



function calc() {
    
        if(operação === 'soma') {
          var resultado =  num1 + num2;
          //document.write('o resultado é:' + resultado)
        }if(operação === 'subtração') {
           var resultado = num1 - num2;
           //document.write('o resultado é:' +  resultado)
        }
        document.write('o resultado é:' +  resultado)
    }

calc()
    
