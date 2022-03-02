// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("my first test", () => {
  it("visits login", () => {
    cy.visit("localhost:3000");
    cy.get("input[id=username]").type("ReZa");
    cy.get("input[id=password]").type("123456");
    cy.get("form").submit();
    cy.get('input[id=username]').should('not.exist');
    cy.get('h3').should('have.text','Welcome ReZa');
    cy.get('.MuiDataGrid-row').should('have.length.greaterThan',0);
    cy.get('.MuiDataGrid-row[data-id=1]').click();
    cy.url().should('equal','http://localhost:3000/1');
    cy.get('#fullName #editBtn').click();
    cy.get('#fullName input').clear().type('ReZa Heydari');
    cy.get('#fullName #confirmBtn').click();
    cy.get('#email #editBtn').click();
    cy.get('#email input').clear().type('r.heydarii98@gmail.com');
    cy.get('#email #confirmBtn').click();
    cy.get('button[id=logout]').click();
    cy.get('input[id=username]').should('exist');
  });
});
