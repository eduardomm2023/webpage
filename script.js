let menuVisible = false;
//Función que oculta o muestra el menú.
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el menú una vez que selecciono una opción.
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Función que aplica las animaciones de las habilidades.
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("adaptabilidad");
    }
}


//Detecto el scrolling para aplicar la animación de la barra de habilidades.
window.onscroll = function(){
    efectoHabilidades();
} 

//Hago que aparezcan las letras del nombre y el apellido de una en una, como si las estuviera escribiendo.
let nombre = "EDUARDO MARTINEZ"
document.addEventListener("DOMContentLoaded", function (){
    let title = document.getElementById("titulo")
    for (let i = 0; i <= nombre.length; i++) {
        setTimeout(() => {
            title.innerText = nombre.slice(0, i)
        }, 100 * i)
    }
})


//Lo mismo que la anterior pero con el título de la profesión.
let profesion = "Desarrollador Python - Analista de datos"
document.addEventListener("DOMContentLoaded", function (){
    let title = document.getElementById("titulo2")
    for (let i = 0; i <= profesion.length; i++) {
        setTimeout(() => {
            title.innerText = profesion.slice(0, i)
        }, 100 * i)
    }
})



//Para cambiar el estilo de la página web (Modo oscuro o claro).
/*  let btn = document.getElementById("btn")
btn.addEventListener('click', function() {
    let {backgroundColor} = document.body.style
    if (backgroundColor == "white") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}) */