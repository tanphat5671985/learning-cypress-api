describe('Testing handle async request', ()=>{
    it('should be able to wait until a request resolved', async ()=>{
        //CRUD
        //let url = 'https://jsonplaceholder.typicode.com/posts'
        let url = Cypress.env('baseUrl')
        //Run cmd: yarn test --spec cypress/test_scripts/TC007_custom_commands.js --env baseUrl=https://jsonplaceholder.typicode.com/posts
        //let header = {'Content-type': 'application/json; charset=UTF-8',}
        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        let updatedPostBody = {
            title: 'fooqqqqq',
            body: 'bar',
            userId: 1
        }
        cy.createPost(createdPostBody).then(res => {
            cy.getPost((Number(res.body.id)-1).toString()).then(res => {
                cy.request({
                    method: 'PUT',
                    url: url + '/' + res.body.id,
                    headers: header,
                    body: updatedPostBody
                }).then(res => {
                    cy.request({
                        method: "DELETE",
                        url: url + '/' + res.body.id
                    }).then(res => {
                        cy.log(JSON.stringify(res))
                    })
                })
            })
        })
    });
});