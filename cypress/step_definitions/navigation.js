import { Given } from 'cypress-cucumber-preprocessor/steps'
import { createYield } from 'typescript'

Given(/^open the website$/, ()=>{
    cy.visit('/');
    
})