objetos = Array()

var objetos = Array('cadeira', 'Impressora', 'Garfo')

function adicionar(){
   var objeto = document.getElementById('input').value
    if(objeto == ''){
        window.alert('informe um valor válido.')
    }if ( objetos.indexOf(objeto) !== -1){
        window.alert('O objeto já foi adicionado')
    }else{
        objetos.push(objeto)
        console.log(objetos)

        document.getElementById('input').value =''
    }
    
}

function ordenar(){
    objetos.sort()
    console.log(objetos)
}