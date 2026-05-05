/* ═══════════════════════════════════════
   LAVANDERÍA GABRIEL'S — main.js
═══════════════════════════════════════ */

// Mostrar toast de bienvenida después de 1.5 s
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const el = document.getElementById('welcomeToast');
        const toast = new bootstrap.Toast(el);
        toast.show();
    }, 1500);
});
