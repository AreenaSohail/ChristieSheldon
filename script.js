const bar = document.getElementById('bar'); // The "hamburger" icon for mobile navigation
const close = document.getElementById('close'); // The "close" icon for closing mobile navigation
const nav = document.getElementById('navbar-nav'); // The navigation menu
// Check if the 'bar' element exists
if (bar) {
    // Add a click event listener to the 'bar' element
    bar.addEventListener('click', ()=>{
        // When the 'bar' is clicked, add the 'active' class to the navigation menu
        nav.classList.add('active');
    })
}
// Check if the 'close' element exists
if (close) {
    // Add a click event listener to the 'close' element
    close.addEventListener('click', ()=>{
        // When the 'close' is clicked, remove the 'active' class from the navigation menu
        nav.classList.remove('active');
    })
}

