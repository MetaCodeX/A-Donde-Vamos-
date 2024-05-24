function ocultarBoton() {
    var boton = document.getElementById("btn");
    var mensaje = document.getElementById("mensaje");
    var overlay = document.getElementById("overlay");
    var contenidoAdicional = document.createElement("div");
    contenidoAdicional.classList.add("contenido-adicional");
    boton.classList.add("hidden");
    setTimeout(() => {
        boton.style.display = "none";
        mensaje.classList.remove("hidden-message");
        overlay.classList.remove("hidden-overlay");
    }, 1000);

    document.getElementById("section").appendChild(contenidoAdicional);
    document.getElementById('btn').style.display = 'none';
    // Reproducir la canción
    var audio = document.getElementById('audio');
    audio.play();
}

function ocultar2() {
    console.log("Se ha hecho clic en el botón Nuevo");
    var boton1 = document.getElementById("btn");
    var mensaje = document.getElementById("mensaje");
    var textoNuevo = document.getElementById("textoNuevo");

    boton1.classList.add("hidden");
    mensaje.classList.add("hidden-message");

    setTimeout(function() {
        textoNuevo.classList.remove("hidden-text2");
        textoNuevo.classList.add("fade-in");
    }, 100);
}



document.addEventListener('DOMContentLoaded', () => {
    const setupCarousel = (carouselSelector, direction) => {
        const carousel = document.querySelector(carouselSelector);
        const slides = carousel.querySelectorAll('.slide');
        const slideWidth = slides[0].offsetWidth;
        const spaceBetweenSlides = 15; // Espacio entre imágenes
        const totalWidth = (slideWidth + spaceBetweenSlides) * slides.length;


        // Configurar la animación inicial
       
        // Reiniciar el carrusel al final de la animación
        carousel.addEventListener('transitionend', () => {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${direction === 'left' ? '-' : ''}${totalWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = `transform 100s linear`;
                carousel.style.transform = `translateX(${direction === 'left' ? '-' : ''}${totalWidth * 2}px)`;
            }, 50); // Pequeño retraso para iniciar la siguiente animación
        });
    };

    setupCarousel('.carousel-1', 'left');
    setupCarousel('.carousel-2', 'right');
    setupCarousel('.carousel-3', 'left');
    setupCarousel('.carousel-4', 'right');
});
