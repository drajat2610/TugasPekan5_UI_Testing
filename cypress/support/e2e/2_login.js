const data = require('../../data/customer.json')

describe('Login', () => {

    it('Login with valid username and password', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)

        cy.get('[value="Log In"]').click()

        cy.get('.smallText')
          .should('have.text', 'Welcome ' + data.firstname + ' ' + data.lastname)
        cy.url().should('include','/parabank/overview')
    })
    
    it('Login with empty username and password', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('[value="Log In"]').click()

        cy.get('.error')
          .should('have.text', 'Please enter a username and password.')
    })

    it('Login with invalid username and password', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('[name="username"]').type('Jokowi')
        cy.get('[name="password"]').type('tukangmebel')

        cy.get('[value="Log In"]').click()

        cy.get('.error')
          .should('have.text', 'The username and password could not be verified.')
    })
})