/// <reference types="Cypress" />


describe('My fifth test case', function() {
    it('Test 5', function(){
       //handling multi tabs test and switching back and forth
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      
      //remove target attribute to stay in the same tab and then perform regular tests - simple !
      cy.get('#opentab').invoke('removeAttr','target').click()
      //temp change of origin not to have an issue with new parent page
      cy.origin('https://www.qaclickacademy.com',()=>
      {
        cy.get("#navbarSupportedContent a[href*='about']").click()
        cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
      })



      })
})