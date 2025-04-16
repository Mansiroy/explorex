// Load HTML components into the page
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Load navbar and footer on every page
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', '/components/navbar.html');
    loadComponent('footer', '/components/footer.html');
});
