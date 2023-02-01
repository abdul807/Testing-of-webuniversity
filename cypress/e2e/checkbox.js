/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />

describe('Text Box', () => {
    it('Populating text box', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Text Box"]').click()
        const username = cy.get('#userName')
        username.type('Hllo')
        cy.get('#userEmail').type('Hllo@gmail.com')
        cy.get('#currentAddress').type('Hllo@gmail.com')
        cy.get('#permanentAddress').type('Hllo@gmail.com')
        cy.get('#submit').click()

        // Assertions
        cy.get('.border').should('have.class','border')
        cy.get('#name').should('have.text','Name:Hllo')
        cy.get('#email').should('have.text','Email:Hllo@gmail.com')
        cy.get('.border > #currentAddress').should('have.text','Current Address :Hllo@gmail.com ')
        cy.get('.border > #permanentAddress').should('have.text','Permananet Address :Hllo@gmail.com')
        

       


      
    });
    
    it('clicking the button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Buttons"]').click()
        cy.xpath("//button[contains(@id,'doubleClickBtn')]").dblclick()
        // assert
        cy.get('#doubleClickMessage').should('have.text','You have done a double click')
      
        // assert
        cy.xpath("//button[contains(@id,'rightClickBtn')]").rightclick()
        cy.get('#rightClickMessage').should('have.text','You have done a right click')

        cy.get('.btn').contains('Click Me').click({force: true})
        cy.get('#dynamicClickMessage')

        
    });

    it.only('Web Tables', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Web Tables"]').click()
        cy.xpath("//button[contains(@id,'addNewRecordButton')]").click()

        // asseretions of the modal
        cy.xpath("//div[contains(@class,'modal-content')]").should('be.visible')

        cy.xpath("//input[contains(@id,'firstName')]").type('firstname')
        cy.xpath("//input[contains(@id,'lastName')]").type('lastname')
        cy.xpath("//input[contains(@id,'userEmail')]").type('lastname@gmail.com')
        cy.xpath("//input[contains(@id,'age')]").type(45)
        cy.xpath("//input[contains(@id,'salary')]").type(354678)
        cy.xpath("//input[contains(@id,'department')]").type('Operations')
        cy.xpath("//button[contains(@id,'submit')]").click()
// 
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('firstname').should('have.text','firstname')
         cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('lastname').should('have.text','lastname')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('firstname').should('have.text','firstname')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains(45).should('exist')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains(354678).should('exist')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('Operations').should('have.text','Operations')

        // cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('department').should('have.text','Operations')

        

        // cy.xpath("//div[contains(@class,'rt-tr-group')]").should('have.text','lastname')


        // cy.get('.prdocutname').contains('Skinsheen Bronzer Stick')




        // cy.get('#rightClickMessage').should('have.text','You have done a right click')

        // cy.get('.btn').contains('Click Me').click({force: true})
        // cy.get('#dynamicClickMessage')

        
    });
});