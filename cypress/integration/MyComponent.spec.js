/// <reference types="Cypress" />

context('Actions', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Should render a greeting', () => {
		cy.findByText('Hello World!').should('exist');
	});
});
