describe('Forgot Password', () => {

    it('Get login info with valid data', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get('a[href*="lookup"]').click()

        cy.get('[id="firstName"]').type('Erling')
        cy.get('[id="lastName"]').type('Halan')
        cy.get('[id="address.street"]').type('Jalan MBZ No.1')
        cy.get('[id="address.city"]').type('Cikarang')
        cy.get('[id="address.state"]').type('Indonesia')
        cy.get('[id="address.zipCode"]').type('13122')
        cy.get('[id="ssn"]').type('112233')

        cy.get('[value="Find My Login Info"]').click()

        cy.get('[id="rightPanel"]').within(() => {
            cy.get('.title').should('have.text', 'Customer Lookup')
            cy.get('p').should('contain', 'Your login information was located successfully. You are now logged in. ')
              .and('contain', 'erlinghalan')
              .and('contain', 'password')
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