// Datos de los productos
const productos = [
    { nombre: "Camiseta", precio: "$20.00", imagen: "camiseta.jpg", detalles: "Camiseta de algodón 100%." },
    { nombre: "Jeans", precio: "$35.00", imagen: "jeans.jpg", detalles: "Jeans ajustados con un estilo moderno." },
    { nombre: "Chaqueta", precio: "$50.00", imagen: "chaqueta.jpg", detalles: "Chaqueta de invierno, perfecta para el frío." },
    { nombre: "Pantalón", precio: "$40.00", imagen: "pantalon.jpg", detalles: "Pantalones cómodos para uso diario." },
    { nombre: "Vestido", precio: "$45.00", imagen: "vestido.jpg", detalles: "Vestido elegante para ocasiones especiales." },
    { nombre: "Zapatos", precio: "$60.00", imagen: "zapatos.jpg", detalles: "Zapatos de cuero de alta calidad." },
    { nombre: "Sudadera", precio: "$30.00", imagen: "sudadera.jpg", detalles: "Sudadera suave y cómoda." },
    { nombre: "Falda", precio: "$25.00", imagen: "falda.jpg", detalles: "Falda de moda para el verano." },
    { nombre: "Blusa", precio: "$28.00", imagen: "blusa.jpg", detalles: "Blusa liviana y fresca." },
    { nombre: "Bañador", precio: "$35.00", imagen: "banador.jpg", detalles: "Bañador cómodo para la playa." },
    { nombre: "Abrigo", precio: "$75.00", imagen: "abrigo.jpg", detalles: "Abrigo elegante y abrigado." },
    { nombre: "Gafas de sol", precio: "$15.00", imagen: "gafas.jpg", detalles: "Gafas de sol modernas y UV." },
    { nombre: "Bufanda", precio: "$20.00", imagen: "bufanda.jpg", detalles: "Bufanda suave para el invierno." },
    { nombre: "Cinturón", precio: "$18.00", imagen: "cinturon.jpg", detalles: "Cinturón de cuero clásico." },
    { nombre: "Calcetines", precio: "$10.00", imagen: "calcetines.jpg", detalles: "Calcetines cómodos y duraderos." },
    { nombre: "Sombrero", precio: "$22.00", imagen: "sombrero.jpg", detalles: "Sombrero de verano ligero." },
    { nombre: "Chaqueta de cuero", precio: "$80.00", imagen: "chaqueta_leather.jpg", detalles: "Chaqueta de cuero auténtico." },
    { nombre: "Zapatillas", precio: "$45.00", imagen: "zapatillas.jpg", detalles: "Zapatillas deportivas cómodas." },
    { nombre: "Mochila", precio: "$30.00", imagen: "mochila.jpg", detalles: "Mochila para uso diario." },
    { nombre: "Tops", precio: "$25.00", imagen: "tops.jpg", detalles: "Tops frescos para el verano." },
    { nombre: "Pijamas", precio: "$28.00", imagen: "pijamas.jpg", detalles: "Pijamas suaves y cómodos." },
    { nombre: "Leggings", precio: "$30.00", imagen: "leggings.jpg", detalles: "Leggings elásticos y cómodos." },
];

// Función para crear y mostrar tarjetas de productos
const mostrarProductos = () => {
    const contenedorProductos = document.getElementById('productos');
    productos.forEach(producto => {
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

        contenedorProductos.appendChild(tarjeta);
    });
};

// Función para mostrar los detalles del producto
const mostrarDetalles = (detalles) => {
    const detallesDiv = event.target.nextElementSibling; // Selecciona el div de detalles
    if (detallesDiv.style.display === "none" || detallesDiv.style.display === "") {
        detallesDiv.style.display = "block"; // Muestra detalles
    } else {
        detallesDiv.style.display = "none"; // Oculta detalles
    }
};

// Llamada a la función para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', mostrarProductos);
