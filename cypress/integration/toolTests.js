/// <reference types="cypress"/>

//run basic tests on top phrases

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
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

})

