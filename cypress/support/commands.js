Cypress.Commands.add('visitpage',({url})=>{
  function visitpage(status,Attempts){
    if(status!=200){
      cy.wrap(Attempts).should('be.lt', 10)
      cy.intercept(url).as('webreq'+Attempts)
      cy.visit(url)
      cy.get('@webreq'+Attempts).then(req=>{
        visitpage(req.response.statusCode,Attempts+1)
      })
    }
  }
  visitpage(0,0)
})

Cypress.Commands.add('testMessage',({message='',delaySeconds=0})=>{
  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }else{
    cy.get('[class*="spinner"]').should('not.exist')
  }
  if(message.length>0){
    cy.contains(message).should('exist')
  }
})

Cypress.Commands.add('topPhrasesRun',(collectionName)=>{
  cy.get('a[class*="welcome-close-link"]').click({force: true})
  cy.contains(collectionName).siblings('input').click({force: true})
  cy.get('input[id=search-input]').type('שיר')
  cy.get('i[class="fas fa-search"]').click()
  
})

Cypress.Commands.add('topPhrasesRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('GET', '**/'+url+'/**', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.topPhrasesRun('תלמוד')
  
  cy.testMessage({
    message:message,
    delaySeconds:delaySeconds
  })
      
})  