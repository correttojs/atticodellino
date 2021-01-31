/* eslint-disable jest/expect-expect */
describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should contain book", () => {
    cy.scrollTo(0, 2000);
    cy.get("[data-cy=policy]").click();

    cy.url().should("include", "privacy");
  });
});
