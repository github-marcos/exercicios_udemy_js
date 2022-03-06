
function imc(){
    let nome = document.getElementById('nome').value
    let cm = Number(document.getElementById('cm').value)
    let peso = Number(document.getElementById('peso').value)
    let res = document.getElementById('res')
    let altura = cm / 100
    let rcalculo = peso / (altura * altura)

    console.log(rcalculo)

    if(nome === '' && cm <= 0 && peso <= 0) {
        window.alert('Preencha todos os campos')
    }if(rcalculo < 16 ){
        res.innerHTML = '<h3>Abaixo do peso. muito grave!</h3>'
    }if ( rcalculo >= 16 && rcalculo < 16.99){
    res.innerHTML = '<h3>Abaixo do peso. grave!</h3>'
    }if( rcalculo >=17 && rcalculo < 18.49){
        res.innerHTML = '<h3>Abaixo do peso.</h3>'
    }if( rcalculo >= 18.50 && rcalculo < 24.99){
        res.innerHTML = '<h3>Peso Normal.</h3>'
    }if ( rcalculo >= 25 && rcalculo < 29.99){
        res.innerHTML = '<h3>Sobrepeso.</h3>'
    }if( rcalculo >= 30 && rcalculo < 34.99){
        res.innerHTML = '<h3>Obesidade grau 1!</h3>'
    }if ( rcalculo >= 35 && rcalculo < 39.99){
        res.innerHTML = '<h3>Obesidade grau 2!</h3>'
    }if( rcalculo > 40 ){
        res.innerHTML = '<h3>Obesidade grau 3!</h3>'
    } 
 }

