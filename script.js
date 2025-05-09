document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("generatedContent.json");
        const data = await response.json();
        document.getElementById("content").innerHTML = `<p>${data.message}</p>`;
    } catch (error) {
        document.getElementById("content").innerHTML = `<p>Error loading content.</p>`;
    }
});