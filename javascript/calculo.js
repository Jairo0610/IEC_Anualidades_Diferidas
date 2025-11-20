// Funciones para cambiar entre formularios
document.getElementById('btnMonto').addEventListener('click', function() {
    cambiarFormulario('formMonto', this);
});

document.getElementById('btnRenta').addEventListener('click', function() {
    cambiarFormulario('formRenta', this);
});

document.getElementById('btnCapital').addEventListener('click', function() {
    cambiarFormulario('formCapital', this);
});

document.getElementById('btnPeriodos').addEventListener('click', function() {
    cambiarFormulario('formPeriodos', this);
});

document.getElementById("btnCalcularMonto").addEventListener('click', calcularMonto);
document.getElementById("btnCalcularRenta").addEventListener('click', calcularRenta);
document.getElementById("btnCalcularCapital").addEventListener('click', calcularCapital);
document.getElementById("btnCalcularPeriodos").addEventListener('click', calcularPeriodos);
document.getElementById("btnLimpiar").addEventListener('click', limpiarCalculadora);

function cambiarFormulario(formId, boton) {
    // Ocultar todos los formularios
    document.querySelectorAll('.calc-form').forEach(form => {
        form.classList.add('hidden');
    });
    
    // Mostrar el formulario seleccionado
    document.getElementById(formId).classList.remove('hidden');
    
    // Actualizar estilos de botones
    document.querySelectorAll('.calc-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    boton.classList.add('active');
    
    // Ocultar resultados al cambiar de formulario
    document.getElementById('resultadosArea').classList.add('hidden');
    
    // Limpiar errores previos
    limpiarErrores();
}

function mostrarResultado(contenido) {
    document.getElementById('resultadosContenido').innerHTML = contenido;
    document.getElementById('resultadosArea').classList.remove('hidden');
    
    // Scroll suave hacia los resultados
    document.getElementById('resultadosArea').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function limpiarCalculadora() {
    // Limpiar todos los inputs
    document.getElementById('calculadoraForm').reset();
    
    // Ocultar área de resultados
    document.getElementById('resultadosArea').classList.add('hidden');
    
    // Limpiar errores
    limpiarErrores();
}

function limpiarErrores() {
    // Limpiar todos los mensajes de error
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    // Remover clase de error de todos los inputs
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('input-error');
    });
}

// FUNCIÓN DE VALIDACIÓN GENERAL
function validarCampo(id, valor, nombre, opciones = {}) {
    const errorElement = document.getElementById(`error-${id}`);
    const inputElement = document.getElementById(id);
    
    // Validar que no esté vacío
    if (valor === '' || valor === null || valor === undefined) {
        errorElement.textContent = `${nombre} es requerido`;
        inputElement.classList.add('input-error');
        return false;
    }
    
    // Convertir a número
    const numero = Number(valor);
    
    // Validar que sea un número válido
    if (isNaN(numero)) {
        errorElement.textContent = `${nombre} debe ser un número válido`;
        inputElement.classList.add('input-error');
        return false;
    }
    
    // Validar que no sea negativo (opcional)
    if (opciones.noNegativo && numero < 0) {
        errorElement.textContent = `${nombre} no puede ser negativo`;
        inputElement.classList.add('input-error');
        return false;
    }
    
    // Validar que sea mayor que cero (opcional)
    if (opciones.mayorQueCero && numero <= 0) {
        errorElement.textContent = `${nombre} debe ser mayor que cero`;
        inputElement.classList.add('input-error');
        return false;
    }
    
    // Validar que sea entero (opcional)
    if (opciones.entero && !Number.isInteger(numero)) {
        errorElement.textContent = `${nombre} debe ser un número entero`;
        inputElement.classList.add('input-error');
        return false;
    }
    
    // Si pasa todas las validaciones, limpiar error
    errorElement.textContent = '';
    inputElement.classList.remove('input-error');
    return true;
}

//CONTENEDOR PARA MOSTRAR LA RESPUESTA
const resultadosArea = document.getElementById("resultadosArea");
const resultadosContenido = document.getElementById("resultadosContenido");

//CAMPOS PARA CALCULAR MONTO
const montoRenta = document.getElementById("montorenta");
const montoTasa = document.getElementById("montotasa");
const montoPeriodo = document.getElementById("montoperiodos");
const montoDiferido = document.getElementById("montodiferidos");

//CAMPOS PARA CALCULAR RENTA
const rentaMonto = document.getElementById("rentamonto");
const rentaTipo = document.getElementById("rentatipo");
const rentaTasa = document.getElementById("rentatasa");
const rentaPeriodos = document.getElementById("rentaperiodos");
const rentaDiferidos = document.getElementById("rentadiferidos");

//CAMPOS PARA CALCULAR CAPITAL
const capitalRenta = document.getElementById("capitalrenta");
const capitalTasa = document.getElementById("capitaltasa");
const capitalPeriodos = document.getElementById("capitalperiodos");
const capitalDiferidos = document.getElementById("capitaldiferidos");

//CAMPOS PARA CALCULAR PERIODOS
const periodosRenta = document.getElementById("periodosrenta");
const periodosMonto = document.getElementById("periodosmonto");
const periodosTipo = document.getElementById("periodostipo");
const periodosTasa = document.getElementById("periodostasa");
const periodosDiferidos = document.getElementById("periodosdiferidos");

//CAMPOS PARA CALCULAR TASA
const tasaRenta = document.getElementById("tasarenta");
const tasaMonto = document.getElementById("tasamonto");
const tasaTipo = document.getElementById("tasatipo");
const tasaPeriodos = document.getElementById("tasaperiodos");
const tasaDiferidos = document.getElementById("tasadiferidos");

// METODOS PARA LOS CALCULOS
function calcularMonto() {
    limpiarErrores();
    
    // Validar todos los campos
    const validaciones = [
        validarCampo('montorenta', montoRenta.value, 'Renta', { mayorQueCero: true }),
        validarCampo('montotasa', montoTasa.value, 'Tasa de Interés', { mayorQueCero: true }),
        validarCampo('montoperiodos', montoPeriodo.value, 'Número de Períodos', { mayorQueCero: true, entero: true }),
        validarCampo('montodiferidos', montoDiferido.value, 'Períodos Diferidos', { noNegativo: true, entero: true })
    ];
    
    // Si alguna validación falla, detener
    if (validaciones.includes(false)) {
        return;
    }
    
    const R = Number(montoRenta.value);
    const i = Number(montoTasa.value);
    const n = Number(montoPeriodo.value);
    const k = Number(montoDiferido.value);

    let monto = R * ((((1 + i) ** n) - 1) / i) * ((1 + i) ** k);
    monto = monto.toFixed(2);
    
    const formula = document.createElement('div');
    formula.innerHTML = "$$M = R \\left (\\frac{(1+i)^n - 1}{i} \\right) (1+i)^k$$";

    const datos = document.createElement('div')
    datos.innerHTML = `<h1>Datos:</h1><h2>R = ${R}</h2><h2>i = ${i}</h2><h2>n = ${n}</h2><h2>k = ${k}</h2>`

    const sustitucion = document.createElement('div')
    sustitucion.innerHTML = `$$M = ${R} \\left (\\frac{(1+${i})^{${n}} - 1}{${i}} \\right) (1+${i})^{${k}}$$`
    
    const montoEncontrado = document.createElement('div')
    montoEncontrado.innerHTML = `$$M = ${monto.toString()}$$`

    const resultado = document.createElement('h1');
    resultado.textContent = "El monto es de $" + monto.toString();
    
    resultadosContenido.innerHTML = ''
    resultadosContenido.appendChild(formula)
    resultadosContenido.appendChild(datos)
    resultadosContenido.appendChild(sustitucion)
    resultadosContenido.appendChild(montoEncontrado)
    resultadosContenido.appendChild(resultado)
    resultadosArea.classList.remove("hidden")
    MathJax.typeset();
}

function calcularRenta() {
    limpiarErrores();
    
    // Validar todos los campos
    const validaciones = [
        validarCampo('rentamonto', rentaMonto.value, 'Monto/Capital', { mayorQueCero: true }),
        validarCampo('rentatasa', rentaTasa.value, 'Tasa de Interés', { mayorQueCero: true }),
        validarCampo('rentaperiodos', rentaPeriodos.value, 'Número de Períodos', { mayorQueCero: true, entero: true }),
        validarCampo('rentadiferidos', rentaDiferidos.value, 'Períodos Diferidos', { noNegativo: true, entero: true })
    ];
    
    if (validaciones.includes(false)) {
        return;
    }

    const CM = Number(rentaMonto.value);
    const i = Number(rentaTasa.value);
    const n = Number(rentaPeriodos.value);
    const k = Number(rentaDiferidos.value);

    let renta;
    const formula = document.createElement('div');
    const resultado = document.createElement('h1');
    const datos = document.createElement('div')
    const sustitucion = document.createElement('div')
    const rentaEncontrada = document.createElement('div')
    
    if (rentaTipo.value == "monto") {
        renta = CM / ( ( ((1+i)**n-1) / i) * (1+i)**k );
        renta = renta.toFixed(2);

        formula.innerHTML = "$$R = \\frac{M}{(\\frac{(1+i)^n -1}{i})(1+i)^k}$$";
        
        datos.innerHTML = `<h1>Datos:</h1><h2>M = ${CM}</h2><h2>i = ${i}</h2><h2>n = ${n}</h2><h2>k = ${k}</h2>`
        
        sustitucion.innerHTML = `$$R = \\frac{${CM}}{(\\frac{(1+${i})^{${n}} -1}{${i}})(1+${i})^{${k}}}$$`
        
        rentaEncontrada.innerHTML = `$$R = ${renta}$$`
        
        resultado.textContent = "La renta es de $" + renta.toString();
    }
    else if (rentaTipo.value == "capital") {
        renta = CM / ( ( (1-(1+i)**-n) / i) * (1+i)**-k );
        renta = renta.toFixed(2);
        
        formula.innerHTML = "$$R = \\frac{C}{(\\frac{1-(1+i)^{-n}}{i})(1+i)^{-k}}$$";

        datos.innerHTML = `<h1>Datos:</h1><h2>C = ${CM}</h2><h2>i = ${i}</h2><h2>n = ${n}</h2><h2>k = ${k}</h2>`
        
        sustitucion.innerHTML = `$$R = \\frac{${CM}}{(\\frac{1-(1+${i})^{${-n}}}{${i}})(1+${i})^{${-k}}}$$`
        
        rentaEncontrada.innerHTML = `$$R = ${renta}$$`

        resultado.textContent = "La renta es de $" + renta.toString();
    }
    
    resultadosContenido.innerHTML = '';
    resultadosContenido.appendChild(formula);
    resultadosContenido.appendChild(datos);
    resultadosContenido.appendChild(sustitucion);
    resultadosContenido.appendChild(rentaEncontrada);
    resultadosContenido.appendChild(resultado);
    resultadosArea.classList.remove("hidden");
    MathJax.typeset();
}

function calcularCapital() {
    limpiarErrores();
    
    const validaciones = [
        validarCampo('capitalrenta', capitalRenta.value, 'Renta', { mayorQueCero: true }),
        validarCampo('capitaltasa', capitalTasa.value, 'Tasa de Interés', { mayorQueCero: true }),
        validarCampo('capitalperiodos', capitalPeriodos.value, 'Número de Períodos', { mayorQueCero: true, entero: true }),
        validarCampo('capitaldiferidos', capitalDiferidos.value, 'Períodos Diferidos', { noNegativo: true, entero: true })
    ];
    
    if (validaciones.includes(false)) {
        return;
    }

    const R = Number(capitalRenta.value);
    const i = Number(capitalTasa.value);
    const n = Number(capitalPeriodos.value);
    const k = Number(capitalDiferidos.value);

    let capital = R * (((1-(1 + i) **-n)) / i) * ((1 + i) ** -k);
    capital = capital.toFixed(2);
    
    const formula = document.createElement('div');
    formula.innerHTML = "$$C = R \\left (\\frac{1-(1+i)^{-n}}{i} \\right) (1+i)^{-k}$$";

    const datos = document.createElement('div')
    datos.innerHTML = `<h1>Datos:</h1><h2>R = ${R}</h2><h2>i = ${i}</h2><h2>n = ${n}</h2><h2>k = ${k}</h2>`

    const sustitucion = document.createElement('div')
    sustitucion.innerHTML = `$$C = ${R} \\left (\\frac{1-(1+${i})^{${-n}}}{${i}} \\right) (1+${i})^{${-k}}$$`
    
    const capitalEncontrado = document.createElement('div')
    capitalEncontrado.innerHTML = `$$C = ${capital.toString()}$$`
    
    const resultado = document.createElement('h1');
    resultado.textContent = "El capital es de $" + capital.toString();
    
    resultadosContenido.innerHTML = '';
    resultadosContenido.appendChild(formula);
    resultadosContenido.appendChild(datos);
    resultadosContenido.appendChild(sustitucion);
    resultadosContenido.appendChild(capitalEncontrado);
    resultadosContenido.appendChild(resultado);
    resultadosArea.classList.remove("hidden");
    MathJax.typeset();
}

function calcularPeriodos() {
    limpiarErrores();
    
    const validaciones = [
        validarCampo('periodosrenta', periodosRenta.value, 'Renta', { mayorQueCero: true }),
        validarCampo('periodosmonto', periodosMonto.value, 'Monto/Capital', { mayorQueCero: true }),
        validarCampo('periodostasa', periodosTasa.value, 'Tasa de Interés', { mayorQueCero: true }),
        validarCampo('periodosdiferidos', periodosDiferidos.value, 'Períodos Diferidos', { noNegativo: true, entero: true })
    ];
    
    if (validaciones.includes(false)) {
        return;
    }

    const R = Number(periodosRenta.value);
    const CM = Number(periodosMonto.value);
    const k = Number(periodosDiferidos.value);
    const i = Number(periodosTasa.value);

    let periodos;
    const formula = document.createElement('div');
    const resultado = document.createElement('h1');
    const datos = document.createElement('div')
    const sustitucion = document.createElement('div')
    const periodoEncontrado = document.createElement('div')

    if(periodosTipo.value == "monto"){
        periodos = 1 + i * (CM / (R * (1+i)**k));
        periodos = Math.log(periodos) / Math.log(1+i);
        periodos = periodos.toFixed(2);
        formula.innerHTML = "$$n = \\frac{\\ln\\left( 1 + i \\frac{M}{R(1+i)^k} \\right)}{\\ln(1+i)}$$";

        
        datos.innerHTML = `<h1>Datos:</h1><h2>M = ${CM}</h2><h2>R = ${R}</h2><h2>i = ${i}</h2><h2>k = ${k}</h2>`
        
        sustitucion.innerHTML = `$$n = \\frac{\\ln\\left( 1 + ${i} \\frac{${CM}}{${R}(1+${i})^{${k}}} \\right)}{\\ln(1+${i})}$$`        
        
        periodoEncontrado.innerHTML = `$$n = ${periodos.toString()}$$`

        resultado.textContent = "El número de períodos es " + periodos.toString() + " ≈ " + Math.round(periodos);
    }
    else if(periodosTipo.value == "capital" ){
        periodos = 1 - i * (CM / (R * (1+i)**(-k)));
        periodos = -Math.log(periodos) / Math.log(1+i);
        periodos = periodos.toFixed(2);        

        formula.innerHTML = "$$n = -\\frac{\\ln\\left( 1 - i \\frac{C}{R(1+i)^{-k}} \\right)}{\\ln(1+i)}$$";

        datos.innerHTML = `<h1>Datos:</h1><h2>C = ${CM}</h2><h2>R = ${R}</h2><h2>i = ${i}</h2><h2>k = ${k}</h2>`

        sustitucion.innerHTML = `$$n = -\\frac{\\ln\\left( 1 - ${i} \\frac{${CM}}{${R}(1+${i})^{${-k}}} \\right)}{\\ln(1+${i})}$$`        
        
        periodoEncontrado.innerHTML = `$$n = ${periodos.toString()}$$`

        resultado.textContent = "El número de períodos es " + periodos.toString() + " ≈ " + Math.round(periodos);
    }
    
    resultadosContenido.innerHTML = '';
    resultadosContenido.appendChild(formula);
    resultadosContenido.appendChild(datos);
    resultadosContenido.appendChild(sustitucion);
    resultadosContenido.appendChild(periodoEncontrado);
    resultadosContenido.appendChild(resultado);
    resultadosArea.classList.remove("hidden");
    MathJax.typeset();
}