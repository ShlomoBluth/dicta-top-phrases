/// <reference types="cypress"/>

//run basic tests on top phrases

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://top-phrases.dicta.org.il/')
      })
    
    it('Top phrases run',()=>{
        cy.topPhrasesRun()
        cy.get('.frame-area').should('contain','ויאמר משה')
    })

})