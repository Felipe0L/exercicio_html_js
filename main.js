const form = document.getElementById('form');

function validaNumero(a,b){
    let valorA = a;
    let valorB = b;
    return valorA < valorB; 
}

form.addEventListener('submit', function(e) {
    const campoA = document.getElementById('campo-A').value;
    const campoB = document.getElementById('campo-B').value;

    if(!validaNumero(campoA,campoB)){
        alert('Error - Campo A maior ou igual ao B !')
    } else {
        alert('Sucesso - Campo B é maior que o A !')
    }
}) 