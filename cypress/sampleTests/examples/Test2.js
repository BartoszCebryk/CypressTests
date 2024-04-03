/// <reference types="Cypress" />


describe('My second test case', function() {
    it('Test 2', function(){
        //odwiedzanie strony
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //wyszukanie pola tekstowego i wprowadzenie tekstu CA
        cy.get('.search-keyword').type('ca');
        //sztywny wait
        cy.wait(2000)
        //wyszukanie elementów o parametrze products, z nich wyselekcjonowanie tych które mają parametr product, 
        //wybranie drugiego i naciśnięcie add to cart
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        //iterowanie przez listę produktów i wybieranie jednego który spełnia kryteria
        cy.get('.products').find('.product').each(($el, index, $list) => {
         const productText = $el.find('h4.product-name').text()
         if(productText.includes('Cashews'))
         {
            cy.wrap($el).find('button').click()
         }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        //fixture
      })
})