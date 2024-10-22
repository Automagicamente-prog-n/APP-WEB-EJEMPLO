const products = [
    {
        img: 'camiseta.jpg',
        title: 'Camiseta',
        price: '$20',
        type: 'Casual'
    },
    {
        img: 'pantalon.jpg',
        title: 'Pantalón',
        price: '$30',
        type: 'Formal'
    },
    {
        img: 'chaqueta.jpg',
        title: 'Chaqueta',
        price: '$50',
        type: 'Abrigo'
    },
    {
        img: 'falda.jpg',
        title: 'Falda',
        price: '$25',
        type: 'Casual'
    },
    {
        img: 'zapatos.jpg',
        title: 'Zapatos',
        price: '$40',
        type: 'Formal'
    },
    {
        img: 'bufanda.jpg',
        title: 'Bufanda',
        price: '$15',
        type: 'Accesorio'
    },
    {
        img: 'bufanda.jpg',
        title: 'Bufanda',
        price: '$15',
        type: 'Accesorio'
    },
    {
        img: 'bufanda.jpg',
        title: 'Bufanda',
        price: '$15',
        type: 'Accesorio'
    },
    {
        img: 'bufanda.jpg',
        title: 'Bufanda',
        price: '$15',
        type: 'Accesorio'
    }
];

let currentSlide = 0;
let autoSlideInterval;

// Generar tarjetas dinámicamente
function generateCards() {
    const carouselInner = document.getElementById('carouselInner');
    const itemsPerSlide = 3; // Número de tarjetas por carrusel
    let itemHTML = '';

    products.forEach((product, index) => {
        itemHTML += `
            <div class="card">
                <img src="https://images.vexels.com/content/142672/preview/green-stroke-tshirt-clothes-67a636.png" alt="${product.title}">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">Precio: ${product.price}</p>
                <p class="card-text">Tipo: ${product.type}</p>
            </div>
        `;
        
        // Añadir la serie de tarjetas al carrusel
        if ((index + 1) % itemsPerSlide === 0 || index === products.length - 1) {
            carouselInner.innerHTML += `<div class="carousel-item">${itemHTML}</div>`;
            itemHTML = '';
        }
    });
}

// Mostrar la diapositiva seleccionada
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Funciones para cambiar la diapositiva
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializar las tarjetas y la animación automática
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Cambia la diapositiva cada 3 segundos
}

// Detener la animación automática al interactuar
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicializar las tarjetas y la animación
generateCards();
startAutoSlide();

// Detener la animación cuando se pasa el ratón sobre el carrusel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);
