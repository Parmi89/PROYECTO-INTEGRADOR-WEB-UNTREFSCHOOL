// BOTON SCROLL//
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Cambia 100 por la altura deseada para mostrar el botón
            $('#scrollBtn').addClass('visible');
        } else {
            $('#scrollBtn').removeClass('visible');
        }
    });

    $('#scrollBtn').click(function() {
        $('html, body').animate({scrollTop : 0}, 500); // Cambia 500 por la duración deseada del desplazamiento
        return false;
    });
});

// VENTANA MODAL//
function openModal(image) {
    var modal = document.getElementById("modal");
    var modalContent = modal.querySelector(".modal-content");

    modalContent.src = image.src;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
