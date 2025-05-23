const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
        
    navbar.classList.toggle('active');

    // Trocar o ícone
    const isActive = navbar.classList.contains('active');
    menuToggle.innerHTML = isActive ? '&times;' : '&#9776;';
});