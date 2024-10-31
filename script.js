// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("guardarCambios");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abrir el modal
btn.onclick = function(event) {
    event.preventDefault(); // Evita que el enlace navegue a otra página
    modal.style.display = "block"; // Muestra el modal
}

// Cuando el usuario hace clic en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none"; // Oculta el modal
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Oculta el modal
    }
}

// Cuando el usuario hace clic en el botón "Aceptar", cerrar el modal
document.getElementById("aceptar").onclick = function() {
    modal.style.display = "none"; // Oculta el modal
    // Aquí puedes agregar la lógica para continuar con el guardado de cambios
    // Por ejemplo, redirigir a otra página o enviar el formulario
}

function showNotification() {
    // Muestra la notificación
    document.getElementById("notification").style.display = "flex";
}

function closeNotification() {
    // Cierra la notificación
    document.getElementById("notification").style.display = "none";
}

