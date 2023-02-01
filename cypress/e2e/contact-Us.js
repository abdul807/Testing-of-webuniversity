/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />



describe('should visit the webuni website', () => {
    it('should access the link', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('eq','WebDriver | Contact Us')
        cy.title().should('include','WebDriver')
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type("alabama")
        cy.get('[name="last_name"]').type("matin")
        cy.get('[name="email"]').type("matin@gmail.com")
        cy.get('textarea.feedback-input').type("hello world")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
        
     
    });


    it('should access the link', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("alabama")
        cy.get('[name="last_name"]').type("matin")
        // cy.get('[name="email"]').type("matin@gmail.com")
        cy.get('textarea.feedback-input').type("hello world")
        cy.get('[type="submit"]').click()
        cy.get('body').contains("Error: all fields are required")
        // cy.get('h1').should('have.text','Thank You for your Message!')
        
     
    });
});