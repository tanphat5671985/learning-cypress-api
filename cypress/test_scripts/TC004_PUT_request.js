describe('Test PUT method request',()=>{
    it('should be able to send a request PUT method and verify it',()=>{
        let requestBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            header: {'Content-type': 'application/json; charset=UTF-8'},
            body: requestBody
        }).then(res => {
            cy.log(JSON.stringify(res))
            let {status} = res
            let resBody = res.body
            let {userId, id, title, body} = resBody
            expect(status).to.eq(200,'Verifing response header')
            expect(userId).to.eq(requestBody.userId, 'Verifing userId')
            expect(id).to.eq(requestBody.id, 'Verifing id')
            expect(title).to.eq(requestBody.title, 'Verifing title')
            expect(body).to.eq(requestBody.body, 'Verifing body')

        })
    })
})