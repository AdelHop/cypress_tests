/// <reference types="cypress" />

describe("E2E - Alerty", () => {
    it("Alerty", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        cy.get("alert").click():
        // metorda do obsługi alertów
        cy.on("window:alert", tresc => {
            
        })
    })
})