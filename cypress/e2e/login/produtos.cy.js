///<reference types ="cypress"/>
describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit("/produtos/");
  });

  it("Deve selecionar um produto da lista ", () => {
    cy.get('[class="product-block grid"]').eq(3).click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    const quantidade = 10;

    cy.get('[class="product-block grid"]').eq(0).click();
    cy.get(".button-variable-item-XS").click();
    cy.get(".button-variable-item-Blue").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should(
      "contain",
      quantidade + " × “Abominable Hoodie” foram adicionados no seu carrinho."
    );
  });

  it.only("Deve adicionar produto ao carrinho - Usando comandos customisados", () => {
    cy.AdicionarProduto(3, 0, 0, 0);
  });
});
