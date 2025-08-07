describe('Validação do link de normas no UOL', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('Acessa o UOL e valida que o link de normas apareceu', () => {
    cy.visit('https://www.uol.com.br/', { timeout: 120000 })

    cy.get('a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade.html"]', { timeout: 60000 })
      .should('be.visible')
  })
})

describe('Validação do elemento <strong>Atualização:</strong> na página de termos UOL', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('Scrolla até o parágrafo da atualização e valida o elemento', () => {
    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
      cy.visit('/normas-de-seguranca-e-privacidade', { timeout: 120000 })

      cy.wait(30000)

      cy.get('p[style="margin-left:0cm;text-align:justify;"]')
        .contains('Atualização:')
        .scrollIntoView({ duration: 1000 })
      cy.get('strong').contains('Atualização:').should('be.visible')
    })
  })
})





