import selectors from '../support/selectors';
import '../support/commands';


describe('Feature Produto', () => {
  let email;
  let senha;

  beforeEach(() => {
    cy.fixture('usuarios').then((usuario) => {
      email = usuario.email.replace('{{timestamp}}', Date.now());
      senha = usuario.senha;

      cy.cadastrarUsuario(usuario.nome, email, senha);
      cy.acessoLogin(email, senha);
    });
  });

  it('Fluxo de CRUD de produto', () => {
    const produto = "Bola de " + Math.random();

    cy.visit('https://front.serverest.dev/admin/home');
    cy.get(selectors.produto.cadastrarBtn).click();
    cy.get(selectors.produto.nome).type(produto);
    cy.get(selectors.produto.preco).type("130");
    cy.get(selectors.produto.descricao).type("sim");
    cy.get(selectors.produto.quantidade).type("10");
    cy.get(selectors.produto.submit).click();

    cy.get(selectors.produto.tabela).should('be.visible');
    cy.get(selectors.produto.colunas).should('include.text', produto);
  });

  it('Fluxo de deletar produto', () => {
    const produto = 'Caneca ' + Math.random();

    cy.productRegistration(produto, '15', 'Caneca nova', '30');
    cy.visit('https://front.serverest.dev/admin/listarprodutos');

    cy.get(selectors.produto.tabela).should('be.visible');
    cy.get(selectors.produto.colunas).should('include.text', produto);

    cy.get(selectors.produto.linhas).each(($row) => {
      if ($row.find(selectors.produto.colunas).eq(0).text() === produto) {
        $row.find(selectors.produto.colunas).eq(5).children('div').children(selectors.produto.deletarBtn).click();
      }
    });

    cy.get(selectors.produto.colunas).should('not.include.text', produto);
  });
});
