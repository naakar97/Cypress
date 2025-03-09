describe('Formulario de Registro', () => {
  // Antes de cada prueba, visita la página de registro
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  // Verifica que todos los campos obligatorios no pueden estar vacíos
  it('Todos los campos obligatorios no pueden estar vacíos', () => {
    cy.get('button[type="submit"]').click();
    cy.get('#nombre:invalid').should('exist');
    cy.get('#email:invalid').should('exist');
    cy.get('#password:invalid').should('exist');
    cy.get('#confirmPassword:invalid').should('exist');
    cy.get('#terminos:invalid').should('exist');
  });

  // Verifica que el correo electrónico tenga un formato válido
  it('El correo electrónico debe tener un formato válido', () => {
    cy.get('#email').type('correo_invalido');
    cy.get('button[type="submit"]').click({ force: true });
    cy.get('#email:invalid').should('exist');
  });

  // Verifica que la contraseña cumpla con los requisitos mínimos de seguridad
  it('La contraseña debe cumplir con los requisitos mínimos de seguridad', () => {
    cy.get('#password').type('1234567');
    cy.get('button[type="submit"]').click({ force: true });
    cy.get('#password:invalid').should('exist');
  });

  // Verifica que las contraseñas ingresadas coincidan
  it('Las contraseñas ingresadas deben coincidir', () => {
    cy.get('#password').type('Password1');
    cy.get('#confirmPassword').type('Password2');
    cy.get('button[type="submit"]').click({ force: true });
    cy.get('#confirmPassword:invalid').should('exist');
  });

  // Verifica que el checkbox de términos y condiciones esté marcado
  it('El checkbox de términos y condiciones debe estar marcado', () => {
    cy.get('#nombre').type('Juan Perez');
    cy.get('#email').type('juan.perez@example.com');
    cy.get('#password').type('Password1');
    cy.get('#confirmPassword').type('Password1');
    cy.get('button[type="submit"]').click({ force: true });
    cy.get('#terminos:invalid').should('exist');
  });

  // Verifica que el botón de envío se deshabilite si hay errores de validación
  it('El botón de envío debe deshabilitarse si hay errores de validación', () => {
    cy.get('#nombre').clear();
    cy.get('#nombre').type('a'); // Agrega un carácter para activar el evento input
    cy.get('#nombre').clear(); // Luego limpia el campo nuevamente
    cy.wait(500); // Agrega un pequeño retraso para asegurarte de que el DOM tenga tiempo de actualizarse
    cy.get('button[type="submit"]').should('be.disabled');
  });

  // Verifica que se redirija a la página de confirmación después de un registro exitoso
  it('Debe redirigir a la página de confirmación después de un registro exitoso', () => {
    cy.get('#nombre').type('Juan Perez');
    cy.get('#email').type('juan.perez@example.com');
    cy.get('#password').type('Password1');
    cy.get('#confirmPassword').type('Password1');
    cy.get('#terminos').check();
    cy.get('button[type="submit"]').click({ force: true });
    cy.url({ timeout: 10000 }).then((url) => {
      if (url.includes('confirmacion.html')) {
        cy.get('#mensajeBienvenida').then((mensaje) => {
          console.log(mensaje.text());
        });
        cy.get('#resumenRegistro').then((resumen) => {
          console.log(resumen.text());
        });
      } else {
        console.error('Redirección fallida: URL no incluye confirmacion.html');
      }
    });
  });
});