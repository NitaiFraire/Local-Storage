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

        // funcion añadir a local storage
        agregarTweetLocalStorage(tweet);
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


// Funciones \\

// Agregar a local storage
function agregarTweetLocalStorage(tweet){

    let tweets;
    tweets = obtenerTweetsLocalStorage();

    // añadir tweet 
    tweets.push(tweet);

    // convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

// leer tweets de local storage
function obtenerTweetsLocalStorage(){

    let tweets;

    // revisar valores de local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}
