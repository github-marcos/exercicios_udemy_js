var caracter = document.getElementById('input')

function acao() {
        caracter.style.backgroundColor = "#ffff00"
        if(caracter.value.length > 0 && caracter.value.length <= 3){
            caracter.style.backgroundColor = "#ff0000"
        }if(caracter.value.length > 3){
            caracter.style.backgroundColor = "#008000"
        }
        
}