/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('Reinaldo Junior')
        cy.get('input[type="email"]').type('reinaldo@gmail.com')
        cy.get('input[type="tel"]').type('11 912344321')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').eq(0).click()

        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('José Silva')

        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('jose@gmail.com')

        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11 956788765')

        cy.get('.alterar').click()
    })

    it('Deve apagar um contato', () => {
        cy.get('.delete').eq(1).click()
    })
})