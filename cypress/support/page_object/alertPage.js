class AlertPage {
    get btnAlert1() {
        return cy.get("#alert");
    }
    get btnAlert2() {
        return cy.get("#alert-confirm");
    }
    clickOnBtnAlert1() {
        this.btnAlert1.click();
    }
    clickOnBtnAlert2() {
        this.btnAlert2.click();
    }
    verifyAlertText(tekst) {
        cy.on("window.alert", (text) => {
            expect(text).to.equal(tekst);
        });
    }
    verifyAlertConfirmText(expectedText) {
        cy.on("window.confirm", (text) => {
            expect(text).to.equal(expectedText);
        });
    }
    rejectAlert() {
        cy.on("window:confirm", () => false);
    }
    acceptAlert() {
        cy.on("window:confirm", () => true);
    }
}

export default new AlertPage();