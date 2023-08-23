/// <reference types = "cypress"/>
import EnderecoPage from '../../support/page-objects/endereco.page'
describe("Funcionalidade Endereços - Faturamento e entrega", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it.only("Deve fazer cadastro de faturamento com sucesso", () => {
    //Cadastro de endereço
    EnderecoPage.editarEnderecoFaturamento()
  });
});
