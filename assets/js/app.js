// variables
const listatweets =  document.getElementById('lista-tweets');


// Event Listeners
eventListeners();

function eventListeners(){

    // Añadir tweet del formulario
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
    });


    // Borrar tweets
    listatweets.addEventListener('click', function(e){

        e.preventDefault();

        // si hacemos click en la X
        if(e.target.className == 'borrar-tweet'){

            e.target.parentElement.remove();
        }
    });
}


// Funciones

