import {DEFAULT} from '../utils/Method'
describe('Testing DELETE method', ()=>{
    it('should be able to send a DELETE request', ()=>{
        cy.request({
            method: DEFAULT.delete,
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).then(res => {
            cy.log(res.status)
            expect(res.status).to.eq(200,'Verifing response header')
        })
    })
})