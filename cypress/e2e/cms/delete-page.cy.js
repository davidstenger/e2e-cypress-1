describe('Local cms login', () => {
  it('Gets, types and clicks', () => {
    //log into local cms
    Cypress.on('uncaught:exception', () => false)

    cy.visit('http://localhost/user/login')
    cy.get('[data-drupal-selector="edit-name"]').type('root')
    cy.get('[data-drupal-selector="edit-pass"]').type('Finn')
    cy.get('[data-drupal-selector="edit-submit"]').click()

    //navigate menu to add content to a English left menu
    cy.get('ul > li > a').contains('Content').focus().click()
    cy.get('#edit-title').type('Having a child and early childhood test')
    cy.get('#edit-submit-content').click()
    cy.get('#edit-node-bulk-form-0').check()
    cy.get('#edit-submit--2').click()
    cy.get('#edit-submit').click()
  })
})