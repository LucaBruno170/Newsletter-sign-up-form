const form = document.getElementById("submit-form")

var emailInput = document.getElementById("email")
var mensajeError = document.getElementById("mensaje-error")

// Escucha el evento "invalid" en el campo de correo electrónico
emailInput.addEventListener("invalid", function(event) {
        event.preventDefault(); // Evita que el navegador muestre el mensaje de error predeterminado
        mensajeError.innerText = "Valid email required";
        emailInput.classList.add("error")
});

form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (emailInput.value.trim() === "") {
                mensajeError.innerText = "Enter an email"
                emailInput.classList.add("error")
        }
        else if (!emailInput.validity.valid || emailInput.validity.typeMismatch) {
                mensajeError.innerText = "Valid email required"
                emailInput.classList.add("error")
        }
        else {
                mensajeError.innerText = ""
                window.location.href = "./success.html"
        }
        
})

function cambiarURL() {
        var imagen = document.getElementById("imagen")
        var nuevaURL = window.innerWidth < 377 ? "./newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-mobile.svg" : "./newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg"

        imagen.src = nuevaURL
}

// Llama a la función al cargar la página y cuando cambia el tamaño de la pantalla
window.onload = cambiarURL;
window.onresize = cambiarURL;
