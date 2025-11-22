# 💰 Calculadora de Anualidades Diferidas (IEC)

> Una herramienta web interactiva para resolver problemas de matemáticas financieras enfocados en **Anualidades Diferidas**.

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-green?style=for-the-badge&logo=github)](https://jairo0610.github.io/IEC_Anualidades_Diferidas/)
[![Status](https://img.shields.io/badge/Status-Activo-blue?style=for-the-badge)](https://github.com/Jairo0610/IEC_Anualidades_Diferidas)

## 🚀 Proyecto
Puedes probar la calculadora directamente en el siguiente enlace:
👉 **[https://jairo0610.github.io/IEC_Anualidades_Diferidas/](https://jairo0610.github.io/IEC_Anualidades_Diferidas/)**

---

## 📋 Descripción del Proyecto

Este proyecto es una solución web diseñada para estudiantes y profesionales de finanzas. Permite realizar cálculos precisos sobre **anualidades diferidas**, las cuales son aquellas donde el primer pago no se realiza en el primer periodo, sino después de un tiempo de gracia o diferimiento.

La aplicación cuenta con una interfaz intuitiva que permite al usuario seleccionar qué variable desea calcular ingresando los datos conocidos.

## ✨ Funcionalidades Principales

El sistema permite calcular las cuatro variables fundamentales de las anualidades diferidas:

1.  **💰 Monto (Valor Futuro):** Calcula cuánto dinero se acumulará al final del plazo.
2.  **🏦 Capital (Valor Presente):** Determina el valor actual de la deuda o inversión considerando el periodo diferido.
3.  **💵 Renta (Pago/Anualidad):** Calcula el valor de los pagos periódicos necesarios para amortizar una deuda o alcanzar un monto.
4.  **📅 Tiempo (Número de Periodos):** Determina cuántos pagos son necesarios.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías web estándar, asegurando compatibilidad y rapidez:

* **HTML5:** Estructura semántica del contenido.
* **CSS:** Estilos modernos y diseño responsivo (adaptable a móviles).
* **JavaScript:** Lógica matemática y manipulación del DOM para los cálculos en tiempo real.

## 📐 Fórmulas Implementadas

El núcleo del proyecto se basa en las fórmulas de interés compuesto y anualidades. Algunos de los conceptos matemáticos aplicados incluyen:

* **Monto:** $M = R \frac{(1+i)^n - 1}{i}$
* **Capital (Diferido):** $C = R \frac{1 - (1+i)^{-n}}{i} (1+i)^{-k}$
    * *Donde $k$ es el tiempo diferido.*

*(Nota: El código JavaScript maneja estas fórmulas adaptándolas a las tasas y periodos ingresados por el usuario).*

## 🔧 Instalación y Uso Local

Si deseas clonar este proyecto para editarlo o verlo en tu computadora localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jairo0610/IEC_Anualidades_Diferidas.git](https://github.com/Jairo0610/IEC_Anualidades_Diferidas.git)
    ```

2.  **Navegar a la carpeta:**
    ```bash
    cd IEC_Anualidades_Diferidas
    ```

3.  **Ejecutar:**
    Simplemente abre el archivo `index.html` en tu navegador web favorito (Chrome, Firefox, Edge).
    
*Este proyecto fue desarrollado con fines educativos para la materia de Ingeniería Económica.*
