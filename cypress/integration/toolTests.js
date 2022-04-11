/// <reference types="cypress"/>

//run basic tests on top phrases

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('Top phrases tanakh run',()=>{
                cy.topPhrasesRun('תנ"ך')
                cy.get('[class*="spinner"]',{timeout:360000}).should('not.exist')
                cy.get('.frame-area').should('contain','שיר המעלות')
            })
        
            it('Top phrases talmud run',()=>{
                cy.topPhrasesRun('תלמוד')
                cy.get('[class*="spinner"]',{timeout:360000}).should('not.exist')
                cy.get('.frame-area').should('contain','נשתיירו בו')
            })
        
        })   
    })
})

