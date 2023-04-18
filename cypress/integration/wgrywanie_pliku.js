/// <reference types="cypress" />

describe("E2E - Wgrywanie plik", () => {
    it("Wgrywanie pliku do inputa", () => {
        cy.visit("/index.php?controller=contact")
        
        cy.get("#fileUpload").attachFile("../fixtures/BLUZKI.jpg")
        cy.get("span.filename").should("contain", "BLUZKI.jpg")
    })
})