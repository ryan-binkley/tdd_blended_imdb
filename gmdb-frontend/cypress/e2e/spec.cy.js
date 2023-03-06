//Home page tests

describe('accesses main page of app', () => {
  it('visits home page', () => {
    cy.visit('/')
  })
  it('should contain text "home"', () => {
    cy.visit('/')
    cy.contains('Home').should('be.visible')
  })
  it('should contain text "GMDB"', () => {
    cy.visit('/')
    cy.contains('GMDB').should('be.visible')
  })
  it('should contain movie image', () => {
    cy.visit('/')
    cy.get('img').should('be.visible')
  })
})

describe('accesses app server', () => {
  it('passes', () => {
    cy.get({url:'http://localhost:3001/movies',method:'get'})
  })
})