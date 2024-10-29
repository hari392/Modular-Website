// scripts.js
document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Load header
        const headerResponse = await fetch("header.html");
        document.getElementById("header-container").innerHTML = await headerResponse.text();

        // Load sidebar
        const sidebarResponse = await fetch("sidebar.html");
        document.getElementById("sidebar-container").innerHTML = await sidebarResponse.text();

        // Load main content
        const mainResponse = await fetch("content.html");
        document.getElementById("main-container").innerHTML = await mainResponse.text();
    } catch (error) {
        console.error("Error loading content:", error);
    }
});



  // Function to handle dropdown click
  function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    button.classList.toggle("active");
  }