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
let header = {'Content-type': 'application/json; charset=UTF-8',}

/**
 * @memberOf cy
 * @method createPost
 * @param {Object} postBody
 */
Cypress.Commands.add('createPost', postBody => {
    cy.request ({
        method: "POST",
        url: Cypress.env('baseUrl'),
        headers: header,
        body: postBody
    })
})