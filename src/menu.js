// responsividade do botao
document.addEventListener('DOMContentLoaded', function () {
    const accordionToggle = document.getElementById('accordion-toggle');
    const accordion = document.getElementById('accordion');

    accordionToggle.addEventListener('click', () => {
        accordion.classList.toggle('hidden');
    });
});