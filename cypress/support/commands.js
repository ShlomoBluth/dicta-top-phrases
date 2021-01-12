Cypress.Commands.add('topPhrasesRequest',({status=200,message='',delaySeconds=0})=>{
  cy.intercept('GET', '**/top_phrases/**', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },).as('top_phrases')
  cy.get('a[class*="welcome-close-link"]').click({force: true})
  cy.get('input[id=search-input]').type('משה')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('i[class="fas fa-search"]').click()
  
  if(message.length>0){
    cy.contains(message,{timeout:1000*delaySeconds+30000}).should('exist')
  }
      
})  