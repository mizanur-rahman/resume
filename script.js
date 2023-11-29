document.addEventListener('DOMContentLoaded', function() {
    // Add current year to the footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = ' | ' + new Date().getFullYear();
    document.querySelector('footer').appendChild(yearSpan);

    // Highlight current section in navigation
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if(link.href.includes(currentPath)) {
            link.style.fontWeight = 'bold';
            link.style.color = '#ffbf69';
        }
    });
});
