let menuVisible = false;
//Función que oculta o muestra el menu
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
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    var habilidades = document.getElementsByClassName("progreso");

    if (distancia_skills >= 300) {
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("cc");
        habilidades[5].classList.add("ccc");
        habilidades[6].classList.add("c");
        habilidades[7].classList.add("html");
        habilidades[8].classList.add("equipo");
        habilidades[9].classList.add("adaptable");
        habilidades[10].classList.add("empatico");
        habilidades[11].classList.add("lider");
        habilidades[12].classList.add("comunicacion");
        habilidades[13].classList.add("dedicacion");
        

    }
}

// Attach the function to a scroll event
window.addEventListener("scroll", efectoHabilidades);

// Trigger the function initially in case the skills are already in view when the page loads
efectoHabilidades();



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1)';
        item.style.opacity = '1';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(0.8)';
        item.style.opacity = '0.7';
    });
});

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || telefono === "" || correo === "" || tema === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Configura los parámetros para enviar el correo utilizando EmailJS
    var templateParams = {
        to_name: nombre,
        phone: telefono,
        user_email: correo,
        asunto: tema, // Utiliza el valor del campo "Tema" del formulario como asunto del correo
        message: mensaje,
        to_email: "einaromar08@gmail.com" // Reemplaza con tu dirección de correo destino
    };
    

    // Envía el correo utilizando EmailJS
    emailjs.send("service_vfy3y5h", "template_re1m3ei", templateParams, "4ZZw_2xZzhiSMoCKI")
        .then(function(response) {
            console.log("Correo enviado con éxito:", response);
            // Puedes redirigir a una página de confirmación o realizar otras acciones aquí.
        }, function(error) {
            console.error("Error al enviar el correo:", error);
        });

    return false; // Evita que el formulario se envíe de forma tradicional
}
