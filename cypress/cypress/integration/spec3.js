describe('Teste End-to-End para Todos os Livros', () => {
    beforeEach(() => {
        // Visita a página antes de cada teste
        cy.visit('http://localhost:5000/')
    })

    it('Teste 1: Verifica se todos os livros estão na página', () => {
        // Verifica se existe o livro Refactoring (data-id=1)
        cy.get('[data-id=1]').should('contain.text', 'Refactoring')

        // Verifica se existe o livro Engenharia De Software Moderna (data-id=2)
        cy.get('[data-id=2]').should('contain.text', 'Engenharia De Software Moderna')

        // Verifica se existe o livro Design Patterns (data-id=3)
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })

    it('Teste 2: Calcula Frete para Refactoring', () => {
        // Calcula o frete para o livro Refactoring
        cy.get('[data-id=1]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click()
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })

    it('Teste 3: Compra Refactoring', () => {
        // Clica no botão Comprar para Refactoring
        cy.get('[data-id=1]').within(() => {
            cy.contains('Comprar').click()
            cy.wait(2000)
        })

        // Verifica se o pop-up de confirmação aparece
        cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')

        // Fecha o pop-up
        cy.get('.swal-button').click()
    })

    it('Teste 4: Calcula Frete para Engenharia De Software Moderna', () => {
        // Calcula o frete para o livro Engenharia De Software Moderna
        cy.get('[data-id=2]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click()
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })

    it('Teste 5: Compra Engenharia De Software Moderna', () => {
        // Clica no botão Comprar para Engenharia De Software Moderna
        cy.get('[data-id=2]').within(() => {
            cy.contains('Comprar').click()
            cy.wait(2000)
        })

        // Verifica se o pop-up de confirmação aparece
        cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')

        // Fecha o pop-up
        cy.get('.swal-button').click()
    })

    it('Teste 6: Calcula Frete para Design Patterns', () => {
        // Calcula o frete para o livro Design Patterns
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click()
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })

    it('Teste 7: Compra Design Patterns', () => {
        // Clica no botão Comprar para Design Patterns
        cy.get('[data-id=3]').within(() => {
            cy.contains('Comprar').click()
            cy.wait(2000)
        })

        // Verifica se o pop-up de confirmação aparece
        cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')

        // Fecha o pop-up
        cy.get('.swal-button').click()
    })
})
