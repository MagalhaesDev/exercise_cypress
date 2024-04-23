/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário de inserção', () => {
       cy.get('.contato').then(contatos => {
        const qtdContatos = contatos.length
        cy.get('input[type="text"]').type('Mateus Magalhães')
        cy.get('input[type="email"]').type('mateus@gmail.com')
        cy.get('input[type="tel"]').type('1998882282')
        cy.get('button[type="submit"]').click()
        cy.get('.contato').should('have.length', qtdContatos + 1)
       })
    })

    it('Deve editar um contato', () => {
        cy.get('button.edit').first().click()
        cy.get('input[type="text"]').clear().type('Teste')
        cy.get('input[type="email"]').clear().type('teste@gmail.com')
        cy.get('button[type="submit"]').click()

        cy.get('.contato').first().should('contain.text', 'Teste')
        cy.get('.contato').first().should('contain.text', 'teste@gmail.com')
    })

    it('Deve excluir um contato', () => {
        cy.get('.contato').then(contatos => { 
            const qtdContatos = contatos.length
            cy.get('button.delete').first().click()
            cy.get('.contato').should('have.length', qtdContatos - 1)
        })
    })
})