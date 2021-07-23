

const nameInput = () => cy.get('input[id="name-input"]')
const toppingInput = () => cy.get('input[type="checkbox"]')
const pizzaBtn = () => cy.get('button[id="order-pizza"]')


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
            .should('have.value', false)
            .check()
            .should('have.value', true)

    })

})