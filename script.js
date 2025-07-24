// ==============================
// Smooth Scrolling for Navigation
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ==============================
// Section Animation on Scroll
// ==============================
const animateOnScroll = () => {
    document.querySelectorAll('.section').forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (position < screenHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// ==============================
// Initial State Setup
// ==============================
window.addEventListener('load', () => {
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    setTimeout(animateOnScroll, 100); // trigger initial animation
});

// ==============================
// Scroll Event Listener
// ==============================
window.addEventListener('scroll', animateOnScroll);
