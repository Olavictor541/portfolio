// This function shows or hides the mobile menu when the hamburger icon is clicked.
// It toggles the "open" class on both the menu and the hamburger icon to trigger CSS styles/animations.
function toggleMenu(){
    const menu = document.querySelector(".menu-links"); // Get the menu element
    // const icon = document.querySelector(".hamburger-icon"); // Get the hamburger icon
    menu.classList.toggle("open"); // Toggle the "open" class to show/hide the menu
    // icon.classList.toggle("open"); // Toggle the "open" class for animation on the icon
}
