// Get all the links with the href attribute starting with #
const links = document.querySelectorAll('a[href^="#"]');

// Loop through each link and add the click event listener
links.forEach(link => {
    link.addEventListener('click', e => {
        // Prevent the default behavior of the link
        e.preventDefault();

        // Get the target element's ID from the href attribute
        const targetId = link.getAttribute('href');

        // Get the target element
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
