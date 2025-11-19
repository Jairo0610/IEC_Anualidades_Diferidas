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

document.getElementById("btnCalcularMonto").addEventListener('click', calcularMonto)
document.getElementById("btnCalcularRenta").addEventListener('click', calcularRenta)
document.getElementById("btnCalcularCapital").addEventListener('click', calcularCapital)
document.getElementById("btnCalcularPeriodos").addEventListener('click', calcularPeriodos)
document.getElementById("btnLimpiar").addEventListener('click', limpiarCalculadora)

function cambiarFormulario(formId, boton) {
    // Ocultar todos los formularios
    document.querySelectorAll('.calc-form').forEach(form => {
        form.classList.add('hidden');
    });
    
    // Mostrar el formulario seleccionado
    document.getElementById(formId).classList.remove('hidden');
    
    // Actualizar estilos de botones
    document.querySelectorAll('.calc-type-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    boton.classList.remove('bg-gray-200', 'text-gray-700');
    boton.classList.add('bg-indigo-600', 'text-white');
    
    // Ocultar resultados al cambiar de formulario
    document.getElementById('resultadosArea').classList.add('hidden');
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
}

//CONTENEDOR PARA MOSTRAR LA RESPUESTA
const resultadosArea = document.getElementById("resultadosArea")
const resultadosContenido = document.getElementById("resultadosContenido")
const resultado = document.createElement('h1')


//CAMPOS PARA CALCULAR MONTO
const montoRenta = document.getElementById("montorenta")
const montoTasa = document.getElementById("montotasa")
const montoPeriodo = document.getElementById("montoperiodos")
const montoDiferido = document.getElementById("montodiferidos")

//CAMPOS PARA CALCULAR RENTA
const rentaMonto = document.getElementById("rentamonto")
const rentaTipo = document.getElementById("rentatipo")
const rentaTasa = document.getElementById("rentatasa")
const rentaPeriodos = document.getElementById("rentaperiodos")
const rentaDiferidos = document.getElementById("rentadiferidos")

//CAMPOS PARA CALCULAR CAPITAL
const capitalRenta = document.getElementById("capitalrenta")
const capitalTasa = document.getElementById("capitaltasa")
const capitalPeriodos = document.getElementById("capitalperiodos")
const capitalDiferidos = document.getElementById("capitaldiferidos")

//CAMPOS PARA CALCULAR PERIODOS
const periodosRenta = document.getElementById("periodosrenta")
const periodosMonto = document.getElementById("periodosmonto")
const periodosTipo = document.getElementById("periodostipo")
const periodosTasa = document.getElementById("periodostasa")
const periodosDiferidos = document.getElementById("periodosdiferidos")

// METODOS PARA LOS CALCULOS
function calcularMonto() {
    resultado.textContent = ""

    const R = Number(montoRenta.value)
    const i = Number(montoTasa.value)
    const n = Number(montoPeriodo.value)
    const k = Number(montoDiferido.value)

    let monto = R * ((((1 + i) ** n) - 1) / i) * ((1 + i) ** k)
    monto = monto.toFixed(2)
    resultado.textContent = "El monto es de $" + monto.toString()
    resultadosContenido.appendChild(resultado)
    resultadosArea.classList.remove("hidden")
}

function calcularRenta() {
    resultado.textContent = ""

    const CM = Number(rentaMonto.value)
    const i = Number(rentaTasa.value)
    const n = Number(rentaPeriodos.value)
    const k = Number(rentaDiferidos.value)

    let renta
    if (rentaTipo.value == "monto") {
        renta = CM / ( ( ((1+i)**n-1) / i) * (1+i)**k )
        renta = renta.toFixed(2)
        resultado.textContent = "La renta es de $" + renta.toString()
        resultadosContenido.appendChild(resultado)
        resultadosArea.classList.remove("hidden")
    }
    else if (rentaTipo.value == "capital") {
        renta = CM / ( ( (1-(1+i)**-n) / i) * (1+i)**-k )
        renta = renta.toFixed(2)
        resultado.textContent = "La renta es de $" + renta.toString()
        resultadosContenido.appendChild(resultado)
        resultadosArea.classList.remove("hidden")
    }
}

function calcularCapital() {
    resultado.textContent = ""

    const R = Number(capitalRenta.value)
    const i = Number(capitalTasa.value)
    const n = Number(capitalPeriodos.value)
    const k = Number(capitalDiferidos.value)

    let capital = R * (((1-(1 + i) **-n)) / i) * ((1 + i) ** -k)
    capital = capital.toFixed(2)
    resultado.textContent = "El capital es de $" + capital.toString()
    resultadosContenido.appendChild(resultado)
    resultadosArea.classList.remove("hidden")
}

function calcularPeriodos() {
    resultado.textContent = ""

    const R = Number(periodosRenta.value)
    const CM = Number(periodosMonto.value)
    const k = Number(periodosDiferidos.value)
    const i = Number(periodosTasa.value)

    let periodos

    if(periodosTipo.value == "monto"){
        periodos = 1 + i * (CM / (R * (1+i)**k))
        periodos = Math.log(periodos) / Math.log(1+i)
        periodos = Math.round(periodos)
        resultado.textContent = "El numero de periodos es" + periodos.toString()
        resultadosContenido.appendChild(resultado)
        resultadosArea.classList.remove("hidden")
    }
    else if(periodosTipo.value == "capital" ){
        periodos = 1 - i * (CM / (R * (1+i)**(-k)))
        periodos = -Math.log(periodos) / Math.log(1+i)
        periodos = Math.round(periodos)
        resultado.textContent = "El numero de periodos es " + periodos.toString()
        resultadosContenido.appendChild(resultado)
        resultadosArea.classList.remove("hidden")
    }
}

