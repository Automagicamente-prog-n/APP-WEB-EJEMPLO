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

// Función para crear y mostrar carruseles
const mostrarCarruseles = () => {
    Object.keys(productos).forEach(categoria => {
        const carruselInner = document.querySelector(`#carrusel-${categoria} .carousel-inner`);

        productos[categoria].forEach((producto, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (index === 0) item.classList.add('active'); // Hacer que el primer elemento sea activo

            item.innerHTML = `
                <img src="https://images.vexels.com/content/142672/preview/green-stroke-tshirt-clothes-67a636.png" class="d-block w-100" alt="${producto.nombre}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${producto.nombre}</h5>
                    <p>${producto.precio}</p>
                    <button onclick="mostrarDetalles('${producto.detalles}')">Detalles</button>
                </div>
            `;
            carruselInner.appendChild(item);
        });
    });
};

// Llamada a la función para mostrar los carruseles al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarruseles);
