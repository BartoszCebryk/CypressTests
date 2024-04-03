/// <reference types="Cypress" />


describe('My first test case', function() {
    it('Test 1', function(){
        //odwiedzanie strony
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //wyszukanie pola tekstowego i wprowadzenie tekstu CA
        cy.get('.search-keyword').type('ca');
        //sztywny wait
        cy.wait(2000)
        //wyszukanie produktów o parametrze product i wyświetlenie tylko tych widocznych oraz sprowadzenie czy jest ich 4
        cy.get('.product:visible').should('have.length',4)
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

        //wykorzystanie .then() do kolejkowania i sekwencjonowania wykonywanych linii kodu pochodzących z poza cypressa - to resolve the promise
        //cy.log należy do komend cypressowych i dlatego będzie odpowiednio obsłużone i wykonane w odpowiedniej kolejności
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })

        //asercja sprawdzająca czy tekst w .brand jest odpowiedni - oczekujemy GREENKART
        cy.get('.brand').should('have.text','GREENKART')

      })
})