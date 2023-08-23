class EnderecoPage {
  editarEnderecoFaturamento() {
    cy.get(".woocommerce-MyAccount-navigation-link--edit-address > a").click();
    cy.get(":nth-child(1) > .title > .edit").click();
    cy.get("#billing_first_name").clear().type("Jeferson");
    cy.get("#billing_last_name").clear().type("Machado");
    cy.get("#billing_company").clear().type("BrasilTec");
    cy.get("#select2-billing_country-container")
      .click()
      .type("Brasil")
      .get('[aria-selected="true"]')
      .click();
    cy.get("#billing_address_1").clear().type("Brasilia-DF");
    cy.get("#billing_address_2").clear().type("44");
    cy.get("#billing_city").clear().type("Ceilândia-Sul");
    cy.get("#select2-billing_state-container")
      .click()
      .type("Distrito Federal{enter}")
    cy.get("#billing_postcode").clear().type(72220215);
    cy.get("#billing_phone").clear().type("+5561999999999");
    cy.get("#billing_email").clear().type("NaoSeiMeuEmail321@gmail.com");
    cy.get(":nth-child(2) > .button").click();
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  }
  editarEnderecoEntrega() {
    //elementos + ações
  }
}
export default new EnderecoPage();
