// ===== THEME TOGGLE - Compartido para todas las páginas =====
// Incluir al final del <body> en TODAS las páginas

(function () {
    const STORAGE_KEY = 'kelfix-theme';

    // Aplica el tema guardado ANTES de que la página termine de cargar
    // (evita el "flash" de tema incorrecto)
    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
        updateBtnLabel(theme);
    }

    function updateBtnLabel(theme) {
        const btn = document.getElementById('btn-theme');
        if (!btn) return;
        if (theme === 'light') {
            btn.innerHTML = '🌙 Modo Oscuro';
        } else {
            btn.innerHTML = '☀️ Modo Claro';
        }
    }

    function toggleTheme() {
        const isLight = document.body.classList.contains('light-mode');
        const newTheme = isLight ? 'dark' : 'light';
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
    }

    // Al cargar la página, aplicar el tema guardado
    window.addEventListener('DOMContentLoaded', function () {
        const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
        applyTheme(saved);

        const btn = document.getElementById('btn-theme');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }
    });
})();
