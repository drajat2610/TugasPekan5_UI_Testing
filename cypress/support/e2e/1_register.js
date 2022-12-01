const data = require('../../data/customer.json')

describe('Register', () => {

    it('Register new customer', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get('a[href*="register"]').click()

        cy.get('[id="customer.firstName"]').type(data.firstname)
        cy.get('[id="customer.lastName"]').type(data.lastname)
        cy.get('[id="customer.address.street"]').type(data.address)
        cy.get('[id="customer.address.city"]').type(data.city)
        cy.get('[id="customer.address.state"]').type(data.state)
        cy.get('[id="customer.address.zipCode"]').type(data.zipcode)
        cy.get('[id="customer.ssn"]').type(data.ssn)
        cy.get('[id="customer.username"]').type(data.username)
        cy.get('[id="customer.password"]').type(data.password)
        cy.get('[id="repeatedPassword"]').type(data.confirmpassword)

        cy.get('[value="Register"]').click()

        cy.get('[id="rightPanel"]').within(() => {
          cy.get('.title').should('have.text', 'Welcome ' + data.username)
          cy.get('p').should('have.text', 'Your account was created successfully. You are now logged in.')
        })
    })

    it('Register existing customers', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('a[href*="register"]').click()

        cy.get('[id="customer.firstName"]').type(data.firstname)
        cy.get('[id="customer.lastName"]').type(data.lastname)
        cy.get('[id="customer.address.street"]').type(data.address)
        cy.get('[id="customer.address.city"]').type(data.city)
        cy.get('[id="customer.address.state"]').type(data.state)
        cy.get('[id="customer.address.zipCode"]').type(data.zipcode)
        cy.get('[id="customer.ssn"]').type(data.ssn)
        cy.get('[id="customer.username"]').type(data.username)
        cy.get('[id="customer.password"]').type(data.password)
        cy.get('[id="repeatedPassword"]').type(data.confirmpassword)

        cy.get('[value="Register"]').click()

        cy.get('[id="customer.username.errors"]')
          .should('have.text', 'This username already exists.')
    })

})