document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link h3'); // Select all h3 inside .nav-link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            navLinks.forEach(node => {
                node.classList.remove('active'); // Remove active class from all links
                node.nextElementSibling.style.width = '0'; // Hide the underline
            });
            this.classList.add('active'); // Add active class to clicked link
            this.nextElementSibling.style.width = '100%'; // Show the underline
        });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the navigation links and containers
    const ordersLink = document.querySelector('.orders-link');
    const returnsLink = document.querySelector('.returns-link');
    const ordersContainer = document.getElementById('orders-container');
    const returnsContainer = document.getElementById('returns-container');

    // Click event for Orders link
    ordersLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Display Orders container and hide Returns container
        ordersContainer.style.display = '';
        returnsContainer.style.display = 'none';
        // Update active class for links
        ordersLink.classList.add('active');
        returnsLink.classList.remove('active');
    });

    // Click event for Returns link
    returnsLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Display Returns container and hide Orders container
        returnsContainer.style.display = '';
        ordersContainer.style.display = 'none';
        // Update active class for links
        returnsLink.classList.add('active');
        ordersLink.classList.remove('active');
    });
});
