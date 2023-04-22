/// <reference types="cypress" />

describe("E2E - Asercja", () => {
    it("asercje expect oraz should", () => {
        cy.visit("/")

        // asercje krótkie - should - weryfikuja tekst (contain - weryfikajca czy to zawiera)
        cy.get('a[title="Contact us"]').should("contain", "Contact us");
        
        // asercje za pomocą expect - weryfikuja tekst 
        cy.get('a[title="Contact us"]').then(zakładka => {
            expect(zakładka).to.contain("Contact us")
        }) 

        // sprawdzenie czy niezawiera teksty
        cy.get('a[title="Contact us"]').should("not.contain", "Contact us2");
        cy.get('a[title="Contact us"]').then(zakładka => {
            expect(zakładka).not.to.contain("Contact us2");
        })
        // weryfikacja czy dany znacznik posiada jakąś klasę
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control")
            })
        //Czy element jest widoczny
        cy.get("#search_query_top").should("be.visible");
        //cy.get("#search_query_top").should("not.be.visible");

        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
            })

        // weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 16)
        cy.get("ul.sf-menu").find("li").then(zakładki => {
            expect(zakładki).to.have.length(16)
        })

})
})

