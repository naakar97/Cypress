describe('Verificación de confirmacion.html en index.html', () => {
    // Verifica que se redirija a confirmacion.html después de un registro exitoso
    it('debería redirigir a confirmacion.html después de un registro exitoso', () => {
        cy.visit('http://127.0.0.1:5500/index.html', { timeout: 10000 });
        
        // Simula el llenado del formulario
        cy.get('#nombre').type('Juan Perez');
        cy.get('#email').type('juan.perez@example.com');
        cy.get('#password').type('Password1');
        cy.get('#confirmPassword').type('Password1');
        cy.get('#terminos').check();
        
        // Envía el formulario
        cy.get('button[type="submit"]').click({ force: true });
        
        // Verifica la redirección con un tiempo de espera mayor
        cy.url({ timeout: 10000 }).should('include', 'confirmacion.html');

        // Verifica el mensaje de bienvenida personalizado
        cy.get('#mensajeBienvenida').should('contain', 'Bienvenido, Juan Perez!');

        // Verifica el resumen de la información registrada
        cy.get('#resumenRegistro').should('contain', 'juan.perez@example.com');
        cy.get('#resumenRegistro').should('not.contain', 'Password1');

        // Verifica la existencia del botón para regresar al inicio o continuar al área de usuario
        cy.get('button#regresarInicio').should('exist');
        cy.get('button#continuarAreaUsuario').should('exist');
    });
});