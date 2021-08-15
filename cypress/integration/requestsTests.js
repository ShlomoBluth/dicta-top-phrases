/// <reference types="cypress"/>

//run tests on the top phrases requests

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

  describe('RequestsTests',()=>{

    
    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        Cypress.config({
          viewportWidth: size[0],
          viewportHeight: size[1]
        })
        cy.viewport(size[0], size[1])
      } else {
        Cypress.config({
          viewportWidth: 375,
          viewportHeight: 812
        })
        cy.viewport(size)
      }
      cy.visitpage({url:'/'})
    })
  
    it('Error message for response with a delay of 6 minutes when clicking the run butten'+
    ' of top-phrases page',()=>{
      cy.topPhrasesRequest({
        url:'top_phrases',
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:60*6
      })
    })
  
    
    it('Error message for response with status code 500 when clicking the run butten of top-phrases page',
    ()=>{
      cy.topPhrasesRequest({
        url:'top_phrases',
        status:500,
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })
    
  
  })

})


