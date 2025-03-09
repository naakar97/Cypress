# Proyecto de Pruebas con Cypress

Este proyecto contiene pruebas automatizadas para un formulario de registro utilizando Cypress.

## Funcionalidad de los Archivos HTML

### index.html
El archivo `index.html` contiene un formulario de registro con los siguientes campos:

- **Nombre completo**: Campo de texto obligatorio.
- **Correo electrónico**: Campo de texto obligatorio con validación de formato de correo electrónico.
- **Contraseña**: Campo de texto obligatorio con validación de seguridad (mínimo 8 caracteres, debe incluir al menos una letra mayúscula, una minúscula y un número).
- **Confirmación de contraseña**: Campo de texto obligatorio que debe coincidir con la contraseña.
- **Fecha de nacimiento**: Campo de fecha opcional.
- **Términos y condiciones**: Checkbox obligatorio que debe ser marcado.

El formulario incluye validaciones en tiempo real para asegurar que los datos ingresados cumplan con los requisitos antes de permitir el envío. Al enviar el formulario, los datos se almacenan en `localStorage` y el usuario es redirigido a `confirmacion.html`.

### confirmacion.html
El archivo `confirmacion.html` muestra un mensaje de bienvenida personalizado y un resumen de la información registrada (sin mostrar la contraseña). También incluye botones para regresar al inicio o continuar al área de usuario. La información se obtiene de `localStorage`.

## Descripción de las Pruebas

### spec-copy-1.cy.js

- **Todos los campos obligatorios no pueden estar vacíos**: Verifica que todos los campos obligatorios no pueden estar vacíos.
- **El correo electrónico debe tener un formato válido**: Verifica que el correo electrónico tenga un formato válido.
- **La contraseña debe cumplir con los requisitos mínimos de seguridad**: Verifica que la contraseña cumpla con los requisitos mínimos de seguridad.
- **Las contraseñas ingresadas deben coincidir**: Verifica que las contraseñas ingresadas coincidan.
- **El checkbox de términos y condiciones debe estar marcado**: Verifica que el checkbox de términos y condiciones esté marcado.
- **El botón de envío debe deshabilitarse si hay errores de validación**: Verifica que el botón de envío se deshabilite si hay errores de validación.
- **Debe redirigir a la página de confirmación después de un registro exitoso**: Verifica que se redirija a la página de confirmación después de un registro exitoso.

### confirmacion.cy.js

- **Debería redirigir a `confirmacion.html` después de un registro exitoso**: Verifica que se redirija a `confirmacion.html` después de un registro exitoso y que la página de confirmación muestre la información correcta.

## Validaciones del Formulario

- **Nombre completo**: Debe estar presente.
- **Correo electrónico**: Debe tener un formato válido.
- **Contraseña**: Debe tener al menos 8 caracteres, incluir una letra mayúscula, una minúscula y un número.
- **Confirmación de contraseña**: Debe coincidir con la contraseña.
- **Términos y condiciones**: Debe estar marcado.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio en tu máquina local:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd proyecto-cypress-testing
    ```

3. Instala las dependencias del proyecto:

    ```sh
    npm install
    ```

## Ejecución de las Pruebas

### Abrir Cypress en modo interactivo

Para abrir Cypress en modo interactivo, ejecuta el siguiente comando:

```sh
npx cypress open
```

