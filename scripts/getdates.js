// Insertar el año actual en el elemento con id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Insertar la fecha de última modificación en el elemento con id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;