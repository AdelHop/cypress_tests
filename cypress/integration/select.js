/// <reference types="cypress" />

describe("E2E wybieranie opcji select", () => {
        // it("Wybieranie opcji", () => {
        //     cy.visit("/index.php?id_category=3&controller=category")
    
        //     //Wybieranie opcji po nazwie (lista musi być po znaczniku select)
        //     cy.get("#selectProductSort").select("In stock")

        //     //Po value
        //     cy.get("#selectProductSort").select("price:asc")

        //     //Po indeksach
        //     cy.get("#selectProductSort").select(7)

        it.only("wybieranie wszystkich opcji", () => {
            cy.visit("/index.php?id_category=3&controller=category")

            cy.get("#selectProductSort").then(select => {
                cy.wrap(select).find("option").each(opcja => {
                    cy.wrap(select).select(opcja.text())
                })
            })
        })
})

