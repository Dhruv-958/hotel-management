document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentIndex = 0;

function showSlide(index) {
    const carouselContent = document.querySelector('.carousel-content');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;

    currentIndex = (index + carouselContent.children.length) % carouselContent.children.length;

    const transformValue = -currentIndex * itemWidth;
    carouselContent.style.transform = `translateX(${transformValue}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", toggleBackToTopButton);
});

function scrollToTop() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    document.body.scrollIntoView({
        behavior : "smooth"
    });

}

function toggleBackToTopButton() {
    const button = document.querySelector('.back-to-top-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}