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

        // AQUÍ IMPLEMENTARÁS TUS FUNCIONES DE CÁLCULO
        function calcularMonto() {
            // Tu código de cálculo aquí
            console.log('Calculando Monto...');
            
            // Ejemplo de cómo mostrar resultado:
            // mostrarResultado('<p class="text-lg"><strong>Monto:</strong> $X,XXX.XX</p>');
        }

        function calcularRenta() {
            // Tu código de cálculo aquí
            console.log('Calculando Renta...');
        }

        function calcularCapital() {
            // Tu código de cálculo aquí
            console.log('Calculando Capital...');
        }

        function calcularPeriodos() {
            // Tu código de cálculo aquí
            console.log('Calculando Períodos...');
        }