const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});

// Actualizar el año de copyright en el footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mostrar la última fecha de modificación del documento
    document.getElementById("lastModified").textContent = document.lastModified;