/// <reference types="cypress" />

Cypress.Commands.add("navInitial", () => {
  cy.visit("/home");
});