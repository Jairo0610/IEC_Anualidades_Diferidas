// Toggle del menú móvil
document.getElementById('menuToggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobileMenu').classList.add('hidden');
        document.getElementById('menuIcon').classList.remove('hidden');
        document.getElementById('closeIcon').classList.add('hidden');
    });
});

// Manejo de botones de tipo de cálculo
const calcButtons = document.querySelectorAll('.calc-type-btn');
const calcForms = {
    'btnMonto': 'formMonto',
    'btnRenta': 'formRenta',
    'btnCapital': 'formCapital',
    'btnPeriodos': 'formPeriodos'
};

calcButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remover clase 'active' de todos los botones
        calcButtons.forEach(btn => btn.classList.remove('active'));

        // Añadir clase 'active' al botón clickeado
        this.classList.add('active');

        // Ocultar todos los formularios
        Object.values(calcForms).forEach(formId => {
            document.getElementById(formId).classList.add('hidden');
        });

        // Mostrar el formulario correspondiente
        const formToShow = calcForms[this.id];
        document.getElementById(formToShow).classList.remove('hidden');

        // Ocultar resultados al cambiar de formulario
        document.getElementById('resultadosArea').classList.add('hidden');
    });
});