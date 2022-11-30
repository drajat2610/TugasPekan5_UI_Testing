

describe('Login', () => {

    it('Login with valid username and password', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('[name="username"]').type('erlinghalan')
        cy.get('[name="password"]').type('password')

        cy.get('[value="Log In"]').click()

        cy.get('.smallText')
          .should('have.text', 'Welcome Erling Halan')
        cy.url().should('include','/parabank/overview')
    })
    
    it('Login with empty username and password', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('[value="Log In"]').click()

        cy.get('.error')
          .should('have.text', 'Please enter a username and password.')
    })

    // it('Login with invalid username and password', () => {

    //     cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
    //     cy.get('[name="username"]').type('test')
    //     cy.get('[name="password"]').type('test')

    //     cy.get('[value="Log In"]').click()

    //     cy.get('.error')
    //       .should('have.text', 'The username and password could not be verified.')
    // })
})