function loadContent(page) {
    const contentArea = document.getElementById('content-area');

    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            contentArea.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            contentArea.innerHTML = '<p>Failed to load content.</p>';
        });
}


// sidebar
const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hidden');
});