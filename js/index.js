const texto = document.querySelector('.contenedor h2'),
      id = document.querySelector('.contenedor span'),
      siguiente = document.querySelector('.contenedor img:last-child');

document.addEventListener('DOMContentLoaded', function(){
    consultar();
});

siguiente.addEventListener('click', function(){
    consultar();
});

function consultar(){
    texto.textContent = "Loading...";

    fetch('https://api.adviceslip.com/advice')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        id.textContent = ` #${data.slip.id}`;
        texto.textContent = `"${data.slip.advice}"`;
    })
    .catch(function(error){
        console.log(error);
    });
}