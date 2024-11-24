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



function showNotification() {
    // Muestra la notificación
    document.getElementById("notification").style.display = "flex";
}
function showNotification() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('Nombre').value;
    const contacto = document.getElementById('contacto').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const numeroPedido = document.getElementById('numeroPedido').value;
    const fechaCompra = document.getElementById('fechaCompra').value;
    const motivo = document.getElementById('motivo').value;

    // Crear un texto con la información ingresada
    const infoText = `
        <strong>Nombre del solicitante:</strong> ${nombre}<br>
        <strong>Número de contacto:</strong> ${contacto}<br>
        <strong>Correo:</strong> ${email}<br>
        <strong>Dirección donde se recoge el pedido:</strong> ${direccion}<br>
        <strong>Número de Pedido:</strong> ${numeroPedido}<br>
        <strong>Fecha de Compra:</strong> ${fechaCompra}<br>
        <strong>Motivo de la Devolución:</strong> ${motivo}

    `;

    // Mostrar la información en la notificación
    document.getElementById('infoSolicitud').innerHTML = infoText;

    // Mostrar la notificación
    document.getElementById('notification').style.display = 'block';
}

function closeNotification() {
    document.getElementById('notification').style.display = 'none';
}

function closeNotification() {
    // Cierra la notificación
    document.getElementById("notification").style.display = "none";
}



 // Función para abrir el modal
function openModal(modal) {
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modal) {
    modal.style.display = "none";
}

const modal1 = document.getElementById('myModal');
const termsModal = document.getElementById('termsModal');

// Evento para cerrar el primer modal
document.getElementById('closeModal1').addEventListener('click', function() {
    closeModal(modal1);
});

// Evento para abrir el segundo modal al hacer clic en "Leer más"
document.getElementById('leerMas').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del enlace
    closeModal(modal1); // Cerrar el primer modal
    openModal(termsModal); // Abrir el segundo modal
});

// Lógica para aceptar en el primer modal
document.getElementById('aceptar').addEventListener('click', function() {
    const checkbox = document.getElementById('aceptarTerminos');
    if (checkbox.checked) {
       
        closeModal(modal1);
    } else {
        alert('Por favor, acepta los términos y condiciones para continuar.');
    }
});

// Lógica para rechazar en el primer modal
document.getElementById('rechazar').addEventListener('click', function() {
   
    clearInputFields(); // Llama a la función para limpiar los campos
    closeModal(modal1);
});

// Evento para cerrar el segundo modal
document.getElementById('closeModal2').addEventListener('click', function() {
    closeModal(termsModal);
});

// Lógica para aceptar en el segundo modal
document.getElementById('aceptarCompletos').addEventListener('click', function() {
    const checkbox = document.getElementById('aceptarTerminosCompletos');
    if (checkbox.checked) {
        
        closeModal(termsModal);
    } else {
        alert('Por favor, acepta los términos y condiciones para continuar.');
    }
});

// Lógica para rechazar en el otro modal
document.getElementById('rechazarCompletos').addEventListener('click', function() {
    
    clearInputFields(); // Llama a la función para limpiar los campos
    closeModal(termsModal);
});

// Función para limpiar los campos de texto
function clearInputFields() {
    const inputs = document.querySelectorAll('.datos input[type="text"], .datos input[type="email"]');
    inputs.forEach(input => {
        input.value = ''; // Limpia el valor de cada campo de texto
    });
}