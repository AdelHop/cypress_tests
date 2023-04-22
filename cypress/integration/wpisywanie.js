/// <reference types="cypress" />

describe("E2E - Wpisywanie", () => {
    it("wpisywanie wartości w pole", () => {
        cy.visit("/")
        // cy.get("#search_query_top").type("Przykładowy produkt {enter}")
        //cy.get("#search_query_top").type("Przykładowy produkt {backspace}", {delay: 500})
        cy.searchPharse("Nowy tekst {backspace}", 100)


    })

    //it("Czyszczenie wartości z pola", () => {
        //cy.get("#search_query_top").clear();
        

    //})


})