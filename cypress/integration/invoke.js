/// <reference types="cypress" />

describe("Invoke", () => {
    it("Invoke", () => {
        cy.visit("/")

        // pobiera informacje o kontakcie, i w formie tekstu zwraca jaka jest nazwa
        cy.get('[title="Contact us"]').invoke("text").then(tekst => {
            cy.log(tekst)
        })
    

        // uzyskanie dostęu do wartosci atrybutu 
        cy.get('[title="Contact us"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })

        cy.get('[title="Contact us"]').invoke("attr", "title").then(title => {
            cy.log(title)

        //  pobieranie informacji o danych wpisanych do inputa
        cy.get("#search_query_top").type("Przykładowa wartość").invoke("prop", "value").then(wartosc => {
            cy.log(wartosc)
        })

        cy.get("#search_query_top").type("Przykładowa wartość").invoke("prop", "checked").then(wartosc => {
            cy.log(wartosc)
        })
         
    })

    })
})