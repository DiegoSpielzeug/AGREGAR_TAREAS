//VARIABLES

const listaTweets = document.getElementById('lista-tweets');
const formulario = document.getElementById('formulario');
const boton = document.getElementById('boton');
const tweet = document.getElementById('tweet');


eventListeners();

function eventListeners (){
    //se ejecuta en cuanto carga la pagina
    document.addEventListener('DOMContentLoaded', deshabilitarBoton);
    //se ejecuta cuando damos click a agregar
    formulario.addEventListener('submit', agregarTweet);
    // boora el tweet
    listaTweets.addEventListener('click', borrarTwet);
    // actualiza en tienpo real lo que se esta escribiendo
    tweet.addEventListener('keypress',habilitarBoton);


}

//FUNCIONES
function deshabilitarBoton(){
   boton.disabled = true;
}
function habilitarBoton(){
    const agregar = tweet.value;

    if( agregar.length >= 2){
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
    
}
function agregarTweet(e){
    e.preventDefault();

    //accedemos a el valor de lo que hay dentro del textarea
    const tarea = tweet.value;
    
    //creamos un elemento  y  (lo que enviamos) lo agregamos al DOM
    const li = document.createElement('li');
    li.innerText = tarea;
    listaTweets.appendChild(li);

    //crear boton borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.innerText = 'x';
    botonBorrar.classList = 'borrar-tweet';
    li.appendChild(botonBorrar);

}
function borrarTwet(e){
    e.preventDefault();
   
   if(e.target.classList.value === 'borrar-tweet'){
       e.target.parentElement.remove();
    } else {
        console.log( ' mi no entender');
    }
}
