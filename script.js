// Datos de los productos organizados por categorías
const productos = {
    camisetas: [
        { nombre: "Camiseta 1", precio: "$20.00", imagen: "camiseta1.jpg", detalles: "Camiseta de algodón 100%." },
        { nombre: "Camiseta 2", precio: "$22.00", imagen: "camiseta2.jpg", detalles: "Camiseta con diseño moderno." },
        { nombre: "Camiseta 3", precio: "$18.00", imagen: "camiseta3.jpg", detalles: "Camiseta básica." },
        { nombre: "Camiseta 4", precio: "$19.00", imagen: "camiseta4.jpg", detalles: "Camiseta cómoda." },
        { nombre: "Camiseta 5", precio: "$25.00", imagen: "camiseta5.jpg", detalles: "Camiseta deportiva." },
        { nombre: "Camiseta 6", precio: "$30.00", imagen: "camiseta6.jpg", detalles: "Camiseta de moda." },
    ],
    pantalones: [
        { nombre: "Pantalón 1", precio: "$35.00", imagen: "pantalon1.jpg", detalles: "Jeans ajustados." },
        { nombre: "Pantalón 2", precio: "$40.00", imagen: "pantalon2.jpg", detalles: "Pantalones cómodos." },
        { nombre: "Pantalón 3", precio: "$38.00", imagen: "pantalon3.jpg", detalles: "Pantalón casual." },
        { nombre: "Pantalón 4", precio: "$42.00", imagen: "pantalon4.jpg", detalles: "Pantalón de vestir." },
        { nombre: "Pantalón 5", precio: "$45.00", imagen: "pantalon5.jpg", detalles: "Pantalón cargo." },
    ],
    chaquetas: [
        { nombre: "Chaqueta 1", precio: "$50.00", imagen: "chaqueta1.jpg", detalles: "Chaqueta de invierno." },
        { nombre: "Chaqueta 2", precio: "$55.00", imagen: "chaqueta2.jpg", detalles: "Chaqueta ligera." },
        { nombre: "Chaqueta 3", precio: "$60.00", imagen: "chaqueta3.jpg", detalles: "Chaqueta de cuero." },
        { nombre: "Chaqueta 4", precio: "$65.00", imagen: "chaqueta4.jpg", detalles: "Chaqueta de mezclilla." },
        { nombre: "Chaqueta 5", precio: "$70.00", imagen: "chaqueta5.jpg", detalles: "Chaqueta de lana." },
    ]
};

// Variable para el índice actual del carrusel
let currentIndex = 0;
const itemsPorVista = 3; // Número de productos a mostrar en cada vista

// Función para crear y mostrar carruseles
const mostrarCarruseles = () => {
    Object.keys(productos).forEach(categoria => {
        const carrusel = document.getElementById(`carrusel-${categoria}`);
        const carruselInner = document.createElement('div');
        carruselInner.classList.add('carrusel-inner');

        productos[categoria].forEach(producto => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('producto');
            tarjeta.innerHTML = `
                <img src="https://images.vexels.com/content/142672/preview/green-stroke-tshirt-clothes-67a636.png" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button onclick="mostrarDetalles('${producto.detalles}')">Detalles</button>
                <div class="detalles" style="display:none;">
                    <p>${producto.detalles}</p>
                </div>
            `;
            carruselInner.appendChild(tarjeta);
        });

        carrusel.appendChild(carruselInner);

        // Agregar controles de carrusel
        const prevButton = document.createElement('button');
        prevButton.classList.add('prev');
        prevButton.innerHTML = '❮';
        prevButton.onclick = () => moverCarrusel(carruselInner, -1);
        carrusel.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.classList.add('next');
        nextButton.innerHTML = '❯';
        nextButton.onclick = () => moverCarrusel(carruselInner, 1);
        carrusel.appendChild(nextButton);

        // Mostrar solo los primeros productos al cargar
        for (let i = 0; i < carruselInner.children.length; i++) {
            if (i < itemsPorVista) {
                carruselInner.children[i].style.display = "block";
            } else {
                carruselInner.children[i].style.display = "none";
            }
        }
    });
};

// Función para mover el carrusel
const moverCarrusel = (carruselInner, direccion) => {
    const productos = carruselInner.children;

    // Ocultar los productos actuales
    for (let i = 0; i < itemsPorVista; i++) {
        productos[(currentIndex + i) % productos.length].style.display = "none";
    }

    // Calcular el nuevo índice
    currentIndex = (currentIndex + direccion + productos.length) % productos.length;

    // Mostrar los nuevos productos
    for (let i = 0; i < itemsPorVista; i++) {
        productos[(currentIndex + i) % productos.length].style.display = "block";
    }
};

// Llamada a la función para mostrar los carruseles al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarruseles);
