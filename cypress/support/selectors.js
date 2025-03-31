const selectors = {
    login: {
      email: '[data-testid="email"]',
      password: '[data-testid="password"]',
      submit: '[data-testid="entrar"]',
      registerLink: '[data-testid="cadastrar"]'
    },
    cadastro: {
      nome: '[data-testid="nome"]',
      email: '[data-testid="email"]',
      password: '[data-testid="password"]',
      checkboxAdmin: '[data-testid="checkbox"]',
      submit: '[data-testid="cadastrar"]'
    },
    produto: {
      cadastrarBtn: '[data-testid="cadastrar-produtos"]',
      nome: '[data-testid="nome"]',
      preco: '[data-testid="preco"]',
      descricao: '[data-testid="descricao"]',
      quantidade: '[data-testid="quantity"]',
      submit: '[data-testid="cadastarProdutos"]',
      tabela: 'tbody',
      linhas: 'tr',
      colunas: 'td',
      deletarBtn: '.btn-danger'
    },
    menu: {
      home: '[data-testid="home"]',
      listarProdutos: '[data-testid="listar-produtos"]'
    }
  };
  
  export default selectors;
  