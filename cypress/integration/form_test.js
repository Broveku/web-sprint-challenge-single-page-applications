

const nameInput = () => cy.get('input[name="name"]')
const toppingInput = () => cy.get('input[type="checkbox"]')
const pizzaBtn = () => cy.get('input[type="submit"]')


describe('Pizza App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    
    it('check that text can be written', ()=>{
        nameInput()
            .should('have.value', '')
            .type('Jordan Gearheart')
            .should('have.value', 'Jordan Gearheart')
        
        toppingInput()
            .check({multiple:true})
        
        pizzaBtn()
            .click()

    })

})