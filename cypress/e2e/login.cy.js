describe("makes sure the user cannot login with invalid inputs", () => {
  it("based on API restrictions the user should not be able to login with invalid email", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas.jakobsen!@noroff.no",
      { force: true },
      { delay: 500 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("andyjako1234", { delay: 500 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("based on API restrictions the user should not be able to login with invalid password", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas.jakobsen@noroff.no",
      { force: true },
      { delay: 500 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("andjako1234!", { delay: 500 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("based on API restrictions the user should not be able to login with invalid email and password", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas!.jakobsen@noroff.no",
      { force: true },
      { delay: 500 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("and!jako1234", { delay: 500 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});

describe("based on API restrictions the user should be able to login with valid inputs", () => {
  it("the user can login with valid email and password", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas.jakobsen@noroff.no",
      { force: true },
      { delay: 500 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("andyjako1234", { delay: 500 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]').contains("Login").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });
});
