
    const products = [
        { id: "fc-1888", 
          name: "flux capacitor", 
          averagerating: 4.5 },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];
    
    document.addEventListener("DOMContentLoaded", () => {
        const productSelect = document.getElementById("product");
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });

        if (localStorage.getItem("reviewCount")) {
            let count = parseInt(localStorage.getItem("reviewCount"));
            localStorage.setItem("reviewCount", count + 1);
        } else {
            localStorage.setItem("reviewCount", 1);
        }
        // Actualizar el año de copyright en el footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mostrar la última fecha de modificación del documento
    document.getElementById("lastModified").textContent = document.lastModified;
    });
   