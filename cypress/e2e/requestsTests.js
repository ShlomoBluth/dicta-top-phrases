/// <reference types="cypress"/>

//run tests on the top phrases requests

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

  sizes.forEach((sizeValue,sizeKey) => {


    describe('requestsTests '+urlKey+' '+sizeKey,()=>{

    
      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
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
})


