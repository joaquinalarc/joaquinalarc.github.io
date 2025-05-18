function filterItems(category) {
    var items = document.getElementsByClassName('cert');
    var buttons = document.querySelectorAll('.filter-buttons button');
    
    // Quitar la clase 'active' de todos los botones
    buttons.forEach(button => button.classList.remove('active'));
    
    // Añadir la clase 'active' al botón seleccionado
    document.getElementById(category).classList.add('active');

    for (var i = 0; i < items.length; i++) {
        if (category === 'all') {
            items[i].style.display = 'block';
        } else {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}
