/// <reference types="cypress" />

// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
    interface Chainable {
        navInitial: () => Chainable<Window>;
    }
}