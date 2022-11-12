describe("User can logout", () => {
  it("User can log out of the app", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas.jakobsen@noroff.no",
      { force: true },
      { delay: 300 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("andyjako1234", { delay: 200 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
    cy.wait(500);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get("button[data-auth='logout']").click();
    cy.wait(500);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
