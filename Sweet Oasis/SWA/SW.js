
// document.addEventListener("DOMContentLoaded", () => {
//     const menuLinks = document.querySelectorAll("nav ul li a");

//     menuLinks.forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault();
//             const sectionId = link.getAttribute("href");
//             document.querySelector(sectionId).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });
// });

// Menuzin
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Banners
let currentSlide = 0;
const slides = document.querySelectorAll('.banner .slides img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Muda a cada 3 segundos
setInterval(nextSlide, 3000);
showSlide(currentSlide);