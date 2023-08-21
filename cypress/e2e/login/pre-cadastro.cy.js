/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
describe("Funcionalidade Pré Cadastro", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });
  it("Deve completar o pré cadastro com sucesso", () => {
    let name =  faker.name.firstName()
    let sobrenome =  faker.name.lastName()
    let email =  faker.internet.email(name)




    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type("teste_#40@teste");
    cy.get(":nth-child(4) > .button").click();

    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(name);
    cy.get("#account_last_name").type(sobrenome);
    cy.get(".woocommerce-Button").click();
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
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
});
