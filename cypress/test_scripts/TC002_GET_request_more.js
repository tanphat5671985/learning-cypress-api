describe('Test GET request', ()=>{
    it('should be able to send GET request and verify the response',()=>{
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(response => {
            //Destructure
            let {status, body} = response
            expect(status).to.eq(200)
            expect(body.length).to.eq(100)

            //get random element from array object
            let randomIndex = Math.random() * body.length
            let roundedRandomIndex = Math.floor(randomIndex)
            let randomObject = body[roundedRandomIndex]
            //verification
            verifyNotEmpty('userID',randomObject.userId)
            verifyNotEmpty('id',randomObject.id)
            verifyNotEmpty('title',randomObject.title)
            verifyNotEmpty('body',randomObject.body)

        })
    });
});

let verifyNotEmpty = (name, data) => {
    if(!data) {
        expect(true).to.eq(false, `The ${name} is empty!`)
    }
}