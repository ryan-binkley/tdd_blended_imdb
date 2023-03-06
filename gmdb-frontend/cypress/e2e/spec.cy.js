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
    cy.wait(5000)
    cy.get('.movie-container').should('be.visible')
  })
})

describe('accesses app server', () => {
  it('passes', () => {
    cy.get({url:'http://localhost:3001/movies',method:'get'})
  })
})

describe('accesses movie detail page of app', () => {
  it('clicks on first image and sees movie details for that poster on detail page', () => {
    cy.visit('/')
    cy.get('[alt="Guardians of the Galaxy Vol. 2"]').click()
    cy.contains('Released: 05 May 2017').should('be.visible')

  })
})
describe('can navigate back home from detail page', () => {

  it('clicks on image to go to details and can go back home by clicking home', () => {
    cy.visit('/')
    cy.get('[alt="The Godfather"]').click()
    cy.get('#nav-home').click()
    cy.url().should('eq', 'http://localhost:3000/')

  })
})




