let header = {'Content-type': 'application/json; charset=UTF-8',}
/**
 * @memberOf cy
 * @method getPost
 * @param {Object} postNum
 */
Cypress.Commands.add('getPost',postNum => {
    cy.request({
        url: Cypress.env('baseUrl') +'/'+ postNum,
        method: 'GET'
    })
})