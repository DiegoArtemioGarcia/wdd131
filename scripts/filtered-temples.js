// Matriz de templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
   {
    templeName: "Bountiful, Utah",
    location: "Bountiful,Utah, United States",
    dedicated: "1995, January, 14",
    area: 392040,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-35439.jpg"
    },
   {
    templeName: "Montevideo Uruguay",
    location: "Montevideo, Uruguay",
    dedicated: "1998, Novermber, 2",
    area: 69260,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/montevideo-uruguay-temple/montevideo-uruguay-temple-18475.jpg"
    },
   {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, october, 4",
    area: 631620,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3548.jpg"
  }
   
  
];

// Filtrar templos por categorías
const filters = {
  old: (temple) => new Date(temple.dedicated).getFullYear() < 1900,
  new: (temple) => new Date(temple.dedicated).getFullYear() > 2000,
  big: (temple) => temple.area > 90000,
  small: (temple) => temple.area < 10000,
  all: () => true
};

// Generar las tarjetas de templo
function generateTempleCards(filter) {
  const gallery = document.getElementById("temple-gallery");
  gallery.innerHTML = "";  // Limpiar la galería

  const filteredTemples = temples.filter(filters[filter]);
  console.log("Templos filtrados:", filteredTemples);

  filteredTemples.forEach((temple) => {
    console.log(`Generando tarjeta para: ${temple.templeName}`);  // Verifica que se está generando la tarjeta
    const templeCard = document.createElement("figure");
    templeCard.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p>${temple.location}</p>
        <p>Dedicado: ${temple.dedicated}</p>
        <p>Área: ${temple.area} ft²</p>
      </figcaption>
    `;
    gallery.appendChild(templeCard);
  });
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", function () {
  generateTempleCards("all"); // Mostrar todos los templos al cargar

  // Menú de filtrado
  document.querySelectorAll("#menu a").forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      generateTempleCards(filter);
    });
  });

  // Actualizar año y última modificación
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
