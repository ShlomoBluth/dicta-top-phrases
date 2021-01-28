/// <reference types="cypress"/>

//run tests on the top phrases requests

describe('RequestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://top-phrases.dicta.org.il/')
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