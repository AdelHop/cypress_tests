/// <reference types="cypress" />

describe("E2E - Akcja kliknięcia", () => {
    it("Kliknięcie na element", () => {
        cy.visit("/")

        cy.contains('[title="Contact us"]', 'Contact us').click();
        cy.get('[title="Return to Home"]').click();

    })




})