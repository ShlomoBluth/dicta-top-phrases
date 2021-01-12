/// <reference types="cypress"/>

//run tests on the top phrases requests

describe('RequestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://top-phrases.dicta.org.il/')
  })

  it('Error message for response with a delay of 2 minutes when clicking the run butten'+
  ' of top-phrases page',()=>{
    cy.topPhrasesRequest({
      message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
      delaySeconds:60*6
    })
  })

  
  it('Error message for response with status code 500 when clicking the run butten of top-phrases page',
  ()=>{
    cy.topPhrasesRequest({
      status:500,
      message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    })
  })
  

})