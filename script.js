document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555'; // Change background color when scrolled
        } else {
            navbar.style.backgroundColor = '#333'; // Reset background color
        }
    });

    // Change font color of nav links on hover
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'lightblue'; // Change font color on hover
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'white'; // Reset font color when not hovered
        });
    });
});
