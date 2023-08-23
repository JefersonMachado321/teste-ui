/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
describe("Funcionalidade Pré Cadastro", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
  });

  it("Deve apresentar erro ao cadastrar usuario já cadastrado", () => {
    cy.get("#reg_email").type("teste_#44@teste.com");
    cy.get("#reg_password").type("teste_#40@teste");
    cy.get(":nth-child(4) > .button").click();

    cy.get(".woocommerce-error").should(
      "contain",
      "Uma conta já está registrada com seu endereço de e-mail. Faça login."
    );
  });

  it("Deve completar o pré cadastro com sucesso", () => {
    let nameFaker = faker.name.firstName();
    let sobrenomeFaker = faker.name.lastName();
    let emailFaker = faker.internet.email(nameFaker);

    cy.get("#reg_email").type(emailFaker);
    cy.get("#reg_password").type("teste_#40@teste");
    cy.get(":nth-child(4) > .button").click();

    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(nameFaker);
    cy.get("#account_last_name").type(sobrenomeFaker);
    cy.get(".woocommerce-Button").click();
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });

  it("Deve completar o pré-cadastro com sucesso usando comandos customizados", () => {
    let emailFaker2 = faker.internet.email();
    cy.preCadastro(emailFaker2, "senha!@#forte", "Jeferson", "Machado");
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });
});
