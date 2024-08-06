const searchInput = document.getElementById("searchInput");
const websites = document.querySelectorAll(".websites div");
const results = document.getElementById("results");

searchInput.addEventListener("input", searchWebsites);

function searchWebsites() {
    const searchTerm = searchInput.value.toLowerCase();

    websites.forEach(website => {
        const title = website.querySelector("h2").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            website.style.display = "block";
        } else {
            website.style.display = "none";
        }
    });

    const visibleWebsites = Array.from(websites).filter(website => website.style.display === "block");
    
    if (visibleWebsites.length > 0) {
        results.textContent = `Found ${visibleWebsites.length} websites`;
    } else {
        results.textContent = "No websites found,Kindly Notify Me.";
    }
}



