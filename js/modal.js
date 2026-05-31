// ===== MODAL CARRITO - Páginas internas =====

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('cart-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const cartBtns = document.querySelectorAll('.card button');

    // Abrir modal al hacer click en cualquier "Agregar al carrito"
    cartBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            modal.classList.add('show');
        });
    });

    // Cerrar modal con el botón "Continuar Comprando"
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    // Cerrar modal al hacer click fuera
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
