/// <reference types="cypress" />

import AlertPage from "../support/page_object/alertPage";

describe("E2E - Alerty", () => {
    it("Alerty", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        AlertPage.clickOnBtnAlert1();
        AlertPage.verifyAlertText("Testowa");
        })

    it("Alert confirm", () => {
        AlertPage.clickOnBtnAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.acceptAlert();
        
    })
  
})