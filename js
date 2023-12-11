const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let dayInput = parseInt(document.getElementById("day").value, 10);
    let monthInput = parseInt(document.getElementById("month").value, 10);
    let yearInput = document.getElementById("year").value.trim();

    // Limpiar mensajes de error
    document.getElementById("days").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("error-day").innerHTML = "";
    document.getElementById("error-month").innerHTML = "";
    document.getElementById("error-year").innerHTML = "";

    // Validación día
    if (dayInput === 0 || isNaN(dayInput)) {
        document.getElementById("error-day").innerHTML = dayInput === 0 ? "Must be a valid day" : "The field is required";
        return;
    }

    // Validación mes
    if (monthInput === 0 || isNaN(monthInput)) {
        document.getElementById("error-month").innerHTML = monthInput === 0 ? "Must be a valid month" : "The field is required";
        return;
    } else if (monthInput < 1 || monthInput > 12) {
        document.getElementById("error-month").innerHTML = "Must be a valid month";
        return;
    }

    // Validación año
    if (yearInput === "") {
        document.getElementById("error-year").innerHTML = "The field is required";
        return;
    }

    // Crear objeto de fecha para la fecha de nacimiento
    let fechaNacimiento = new Date(yearInput, monthInput - 1, dayInput);

    // Validar que la fecha de nacimiento sea válida
    if (
        fechaNacimiento.getDate() !== dayInput ||
        fechaNacimiento.getMonth() + 1 !== monthInput ||
        fechaNacimiento.getFullYear().toString() !== yearInput
    ) {
        document.getElementById("error-day").innerHTML = "Must be a valid day";
        document.getElementById("error-month").innerHTML = "Must be a valid month";
        document.getElementById("error-year").innerHTML = "Must be a valid year";
        return;
    }

    // Obtener la fecha actual
    let fechaActual = new Date();

    // Verificar si la fecha de nacimiento está en el futuro
    if (fechaNacimiento > fechaActual) {
        document.getElementById("error-day").innerHTML = "Must be in the past";
        document.getElementById("error-month").innerHTML = "Must be in the past";
        document.getElementById("error-year").innerHTML = "Must be in the past";
        return;
    }

    // Resto del código para mostrar la edad
    let diferenciaMilisegundos = fechaActual - fechaNacimiento;
    let diferenciaFecha = new Date(diferenciaMilisegundos);

    let days = diferenciaFecha.getDate();
    let months = diferenciaFecha.getUTCMonth();
    let years = diferenciaFecha.getUTCFullYear() - 1970;

    document.getElementById("days").innerHTML = days;
    document.getElementById("months").innerHTML = months;
    document.getElementById("years").innerHTML = years;
});
