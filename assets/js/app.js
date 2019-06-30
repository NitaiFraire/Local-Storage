// variables
const listatweets =  document.getElementById('lista-tweets');


// Event Listeners
eventListeners();

function eventListeners(){

    // añadir tweet del formulario
    document.querySelector('#formulario').addEventListener('submit', function(e){
        
        e.preventDefault();

        // leer valor de text area
        const tweet = document.getElementById('tweet').value;

        // crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        // crear elemento y añadir el contenido del tweet y boton eliminar a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);
        listatweets.appendChild(li);

        console.log(tweet);
    });
}


// Funciones

