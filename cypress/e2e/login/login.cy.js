///<reference types="Cypress"/>

context("Funcionalidade Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
    cy.get('.page-title').should("contain", "Minha conta");
  });

  it("Aparecer mensagem de erro ao inserir login incorreto", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com1");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
    );
  });

  it("Aparecer mensagem de erro ao inserir senha incorreto", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com1");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?"
    );
  });
});