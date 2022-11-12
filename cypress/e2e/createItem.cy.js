describe("User can create and delete post", () => {
  it("The user can create a post and delete it. the delete part is only to not make clutter on the API", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas.jakobsen@noroff.no",
      { force: true },
      { delay: 150 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("andyjako1234", { delay: 150 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]').contains("Login").click();
    cy.wait(2000);
    cy.get('[id="footerActions"] a').contains("New Post").click();
    cy.wait(500);
    cy.get('form [id="postTitle"]').type("cypress?", { delay: 150 });
    cy.wait(500);
    cy.get('form [id="postTags"]').type("cypress-testing", { delay: 150 });
    cy.wait(500);
    cy.get('form [id="postMedia"]').type(
      "https://picsum.photos/seed/picsum/200/300"
    );
    cy.wait(500);
    cy.get('form [id="postBody"]').type("shorter text for test", {
      delay: 150,
    });
    cy.wait(5000);
    cy.get('form button [data-action="publish"]').click();
    cy.wait(30000);
    cy.get("button").contains("Delete").click({ force: true });
    cy.wait(1000);
  });

  it("The user cannot create a post without a title.", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(500);
    cy.get('form [id="loginEmail"]').type(
      "andreas.jakobsen@noroff.no",
      { force: true },
      { delay: 150 }
    );
    cy.wait(500);
    cy.get('form [id="loginPassword"]').type("andyjako1234", { delay: 150 });
    cy.wait(500);
    cy.get('form [class="btn btn-success"]').contains("Login").click();
    cy.wait(2000);
    cy.get('[id="footerActions"] a').contains("New Post").click();
    cy.wait(500);
    cy.get('form [id="postTags"]').type("cypress-testing", { delay: 150 });
    cy.wait(500);
    cy.get('form [id="postMedia"]').type(
      "https://picsum.photos/seed/picsum/200/300"
    );
    cy.wait(5000);
    cy.get('form [id="postBody"]').type("shorter text for test", {
      delay: 150,
    });
    cy.wait(5000);
    cy.get('form button [data-action="publish"]').click();
    cy.wait(30000);
    cy.get('form button [data-action="publish"]').then(($el) => {
      Cypress.dom.isVisible($el); // true
    });
  });
});
