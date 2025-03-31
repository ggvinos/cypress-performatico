// Adiciona um comando personalizado para cadastrar um usuário
Cypress.Commands.add('cadastrarUsuario', (nome, email, senha) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
            nome: nome,
            email: email,
            password: senha,
            administrador: 'true' // Define como administrador
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        cy.log(`Usuário ${email} cadastrado com sucesso!`);
    });
});

// Adiciona um comando personalizado para login
Cypress.Commands.add('acessoLogin', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: email,
            password: password
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        window.localStorage.setItem('serverest/userToken', response.body.authorization);
        cy.log(`Usuário ${email} logado com sucesso!`);
    });
});

// Adiciona um comando personalizado para cadastrar um produto
Cypress.Commands.add('productRegistration', (name, price, description, quantity) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        body: {
            nome: name,
            preco: price,
            descricao: description,
            quantidade: quantity
        },
        headers: {
            authorization: window.localStorage.getItem('serverest/userToken'),
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        cy.log(`Produto ${name} cadastrado com sucesso!`);
    });
});

// Adiciona um comando personalizado para deletar um produto pelo ID
Cypress.Commands.add('deletarProduto', (id) => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/${id}`,
        headers: {
            authorization: window.localStorage.getItem('serverest/userToken'),
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(`Produto ${id} deletado com sucesso!`);
    });
});