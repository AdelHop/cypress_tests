/// <reference types="cypress" />

describe("E2E - Skrolowanie/najechanie", () => {
    it("Najechanie na dany element", () => {
        cy.visit("/")
        // powołuje pojawienie się zakładek które rozwijaja sie z przycisku po najechaniu na niego
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")

        cy.get('li.sfHover a[title="Summer Dresses"]').click();
    })
    it("Skrolowanie do boxa Specials",() => {
        cy.get('a[title="Specials"]').first().scrollIntoView()
        
    })

    




})