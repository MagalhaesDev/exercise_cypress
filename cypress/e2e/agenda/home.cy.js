/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário de inserção', () => {
        cy.get('input[type="text"]').type('Mateus Magalhães')
        cy.get('input[type="email"]').type('mateus@gmail.com')
        cy.get('input[type="tel"]').type('1998882282')
        cy.get('button[type="submit"]').click()
    })

    it('Deve editar um contato', () => {
        cy.get('button.edit').first().click()
        cy.get('input[type="text"]').clear().type('Teste')
        cy.get('input[type="email"]').clear().type('teste@gmail.com')
        cy.get('button[type="submit"]').click()
    })

    it('Deve exlcuir um contato', () => {
        cy.get('button.delete').first().click()
    })
})