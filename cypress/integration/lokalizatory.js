/// <reference types="cypress" />

describe("E2E - lokalizatory", () => {
  it("Should open home page", () => {
    cy.visit("/");

    //Po znaczniku
    cy.get("a");

    //Identyfikator - atrybut który jest unikalny
    cy.get("#search_query_top");

    //Po klasie
    cy.get(".form-control");

    //po atrybutach w [] nawiasach i w ' a nie "
    cy.get('[name="search_query"]');
    cy.get('[placeholder="Search"]');

    //po atrybucie z podaniem znacznika
    cy.get('input[placeholder="Search"]');

    //pobieranie elementów po kilku atrybutach
    cy.get(
      '[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]'
    );

    // zalecana przez cypressa technika pobierania elementów - nadawanie atrybutów pod testy np. data-cy
  });

  it.only("Lokalizatory cz.2", () => {
    cy.visit("/");
    //pobieranie elementów po ich treści
    cy.contains("Shop now !");
    cy.contains('[title="Contact us"]', "Contact us");
    // pobieranie elementu wskazanego - Best sellers
    cy.get("li").parents("#home-page-tabs").find("li").first;
    cy.get("li").parents("#home-page-tabs").find("li").eq(1);
    cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers");
  });
});
