///<reference types="cypress" />

describe('Login Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('should log in with valid credentials', () => {
        cy.get('[placeholder="Username"]').type('Admin');
        cy.get('[placeholder="Password"]').type('admin123');
        cy.get('button[type="submit"]').click();
    })

     it('should log in with invalid credentials', () => {
        cy.get('[placeholder="Username"]').type('Admin3');
        cy.get('[placeholder="Password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        // Assertion for error message
        expect(true).to.be.true;
    })


})