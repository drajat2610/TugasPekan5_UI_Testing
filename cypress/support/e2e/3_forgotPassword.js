const data = require('../../data/customer.json')

describe('Forgot Password', () => {

    it('Get login info with valid data', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get('a[href*="lookup"]').click()

        cy.get('[id="firstName"]').type(data.firstname)
        cy.get('[id="lastName"]').type(data.lastname)
        cy.get('[id="address.street"]').type(data.address)
        cy.get('[id="address.city"]').type(data.city)
        cy.get('[id="address.state"]').type(data.state)
        cy.get('[id="address.zipCode"]').type(data.zipcode)
        cy.get('[id="ssn"]').type(data.ssn)

        cy.get('[value="Find My Login Info"]').click()

        cy.get('[id="rightPanel"]').within(() => {
            cy.get('.title').should('contain', 'Customer Lookup')
            cy.get('p').should('contain', 'Your login information was located successfully. You are now logged in. ')
              .and('contain', data.username)
              .and('contain', data.password)
        })
    })

    it('Get login info with invalid data', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get('a[href*="lookup"]').click()

        cy.get('[id="firstName"]').type('Liem')
        cy.get('[id="lastName"]').type('Nelson')
        cy.get('[id="address.street"]').type('Jalan Pantura No.1')
        cy.get('[id="address.city"]').type('Indramayu')
        cy.get('[id="address.state"]').type('Indonesia')
        cy.get('[id="address.zipCode"]').type('13122')
        cy.get('[id="ssn"]').type('112233')

        cy.get('[value="Find My Login Info"]').click()

        cy.get('[id="rightPanel"]').within(() => {
            cy.get('.title').should('contain', 'Error!')
            cy.get('.error').should('contain', 'The customer information provided could not be found.')
        })
    })
})