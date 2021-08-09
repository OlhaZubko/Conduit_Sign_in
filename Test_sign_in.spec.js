/// <rference types="cypress" />


describe('', () => {
    before('', () => {
        
    });

    it('', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=wl0y9v');
        cy.get(':nth-child(1) > .form-control').type('buddy70@yahoo.com');
        cy.get(':nth-child(2) > .form-control').type('Zxcvbnm14');
        cy.get('.btn').click();
        cy.get('.navbar').contains('Else4').should('exist');
    })
})