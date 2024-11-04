function toggleDropdown(event, element) {
    // Prevent the link from navigating when clicked to toggle dropdown
    event.preventDefault();
  
    // Toggle the visibility of the next element (dropdown container)
    const dropdownContainer = element.nextElementSibling;
    dropdownContainer.style.display =
      dropdownContainer.style.display === 'block' ? 'none' : 'block';
  
    // Toggle arrow direction
    element.classList.toggle('active');
  }

  
//function to load all HTML//

function includeHTML(file, elementID) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById(elementID).innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Loads each part into the main HTML file//
document.addEventListener("DOMContentLoaded", function() {
  includeHTML("header.html", "header");
  includeHTML("sidebar.html", "sidebar");
  includeHTML("content.html", "content");
});

// Dynamically load content pages on link click

document.addEventListener("click", function(event) {
  if (event.target.tagName === "A" && event.target.href.includes("Introduction/")) {
    event.preventDefault();
    let page = event.target.getAttribute("href");
    includeHTML(page, "content");
  }
});

document.addEventListener("click", function(event) {
  if (event.target.tagName === "A" && event.target.href.includes("Topic1/")) {
    event.preventDefault();
    let page = event.target.getAttribute("href");
    includeHTML(page, "content");
  }
});

document.addEventListener("click", function(event) {
  if (event.target.tagName === "A" && event.target.href.includes("Topic2/")) {
    event.preventDefault();
    let page = event.target.getAttribute("href");
    includeHTML(page, "content");
  }
});

document.addEventListener("click", function(event) {
  if (event.target.tagName === "A" && event.target.href.includes("Topic3/")) {
    event.preventDefault();
    let page = event.target.getAttribute("href");
    includeHTML(page, "content");
  }
});
