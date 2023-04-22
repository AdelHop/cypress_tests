import 'cypress-file-upload';

Cypress.Commands.add("OpenTshirtsTab", () => {
    cy.visit("http://automationpractice.pl/index.php?id_category=5&controller=category")
})

Cypress.Commands.add("searchPharse", (text, delayValue) => {
    cy.get("#search_query_top").type(text, {delay: delayValue})
        
})
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
//Pozwala nadpisać istniejącą metode (NIEZALECANE)
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
