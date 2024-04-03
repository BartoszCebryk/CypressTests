/// <reference types="Cypress" />


describe('My third test case', function() {
    it('Test 3', function(){
        //odwiedzanie strony
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        //checkboxy .check - zaznaczanie, .should - sprawdzenie stanu, and - dodanie warunku do should
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //wiele checkboxów na raz
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdown with id usage 
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
          if($el.text()==='India')
          {
             $el.click()
          }
         })
        cy.get('#autocomplete').should('have.value','India')

        //asserting if the element is visible
        cy.get('#displayed-text').should('be.visible')
        
        //hiding the element and checking if it is hidden
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        //showing element and checking if it is visible
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //handling radiobuttons (same as checkboxes)

        cy.get('[value="radio2"]').check().should('be.checked')



      })
})