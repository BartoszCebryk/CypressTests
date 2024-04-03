/// <reference types="Cypress" />


describe('My fourth test case', function() {
    it('Test 4', function(){
       
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      //handling alerts
      cy.get('#alertbtn').click()
      cy.get('#confirmbtn').click()
      //alternative
      cy.get('[value="Confirm"]').click()
      //window:alert dla alertów na stronie
      cy.on('window:alert', (str) =>
      {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
      //window:confirm dla alertów na stronie
      cy.on('window:confirm', (str) =>
      {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })


      })
})