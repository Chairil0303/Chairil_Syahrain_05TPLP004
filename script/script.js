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

// aktif sidebar
function setActive(menuId) {
    // Ambil semua elemen dengan kelas 'sidebar-item'
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Hapus kelas 'active' dari semua item
    sidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    // Tambahkan kelas 'active' hanya ke item yang diklik
    const activeItem = document.getElementById(menuId);
    activeItem.classList.add(' active ');
}