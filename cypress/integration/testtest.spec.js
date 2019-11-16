import { createYield } from "typescript"

context("QuickStart", ()=>{
    it('open the quick start', ()=>{
        cy.visit('/');
        cy.get('.toolbar').contains("Welcome");
        cy.get('.content').contains("app is running");
        cy.get('.content pre').contains("ng generate component");
    })
})

