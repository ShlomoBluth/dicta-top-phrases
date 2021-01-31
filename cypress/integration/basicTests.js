/// <reference types="cypress"/>

//run basic tests on top phrases

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://top-phrases.dicta.org.il/')
      })
    
    it('Top phrases tanakh run',()=>{
        cy.topPhrasesRun('תנ"ך')
        cy.get('.frame-area').should('contain','ויאמר משה')
    })

    it('Top phrases talmud run',()=>{
        cy.topPhrasesRun('תלמוד')
        cy.get('.frame-area').should('contain','משה רבינו')
    })

})