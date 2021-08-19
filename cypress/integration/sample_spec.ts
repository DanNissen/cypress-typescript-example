describe('my first test', ()=>{
    it('asserts that the default react app text is on the page',()=>{
        cy.visit("/")
        cy.contains('Edit src/App.tsx and save to reload')
    })
})