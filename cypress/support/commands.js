// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//agregar todos los productos
Cypress.Commands.add('addAllProducts', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
  });
