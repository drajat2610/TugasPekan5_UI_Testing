describe('Register', () => {

    it('Register new customer', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get('a[href*="register"]').click()

        cy.get('[id="customer.firstName"]').type('Erling')
        cy.get('[id="customer.lastName"]').type('Halan')
        cy.get('[id="customer.address.street"]').type('Jalan MBZ No.1')
        cy.get('[id="customer.address.city"]').type('Cikarang')
        cy.get('[id="customer.address.state"]').type('Indonesia')
        cy.get('[id="customer.address.zipCode"]').type('13122')
        cy.get('[id="customer.ssn"]').type('112233')
        cy.get('[id="customer.username"]').type('erlinghalan')
        cy.get('[id="customer.password"]').type('password')
        cy.get('[id="repeatedPassword"]').type('password')

        cy.get('[value="Register"]').click()

        cy.get('[id="rightPanel"]').within(() => {
          cy.get('.title').should('have.text', 'Welcome erlinghalan')
          cy.get('p').should('have.text', 'Your account was created successfully. You are now logged in.')
        })
    })

    it('Register existing customers', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        cy.get('a[href*="register"]').click()

        cy.get('[id="customer.firstName"]').type('Erling')
        cy.get('[id="customer.lastName"]').type('Halan')
        cy.get('[id="customer.address.street"]').type('Jalan MBZ No.1')
        cy.get('[id="customer.address.city"]').type('Cikarang')
        cy.get('[id="customer.address.state"]').type('Indonesia')
        cy.get('[id="customer.address.zipCode"]').type('13122')
        cy.get('[id="customer.ssn"]').type('112233')
        cy.get('[id="customer.username"]').type('erlinghalan')
        cy.get('[id="customer.password"]').type('password')
        cy.get('[id="repeatedPassword"]').type('password')

        cy.get('[value="Register"]').click()

        cy.get('[id="customer.username.errors"]')
          .should('have.text', 'This username already exists.')
    })

})