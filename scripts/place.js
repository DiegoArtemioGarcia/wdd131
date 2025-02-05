// Mostrar el año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Mostrar la última fecha de modificación del documento
const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastModifiedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
});

// Definir valores estáticos de temperatura y velocidad del viento (según lo mostrado en el HTML)
const temperature = 8; // °C
const windSpeed = 12; // km/h

// Función para calcular la sensación térmica (Wind Chill en °C)
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    } else {
        return "N/A"; // No aplica si la temperatura es mayor a 10°C o el viento es menor a 4.8 km/h
    }
}

// Obtener el valor de sensación térmica y actualizar en la página
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChillValue").textContent = windChill + "°C";