describe("Home page", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Should contain header", () => {
    cy.visit("/");
    cy.get("header").should("be.visible");
  });
});
