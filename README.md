# 🚀 Testes Automatizados com Cypress - Serverest

## 📌 Descrição
Este projeto implementa testes automatizados utilizando **Cypress** para validar os principais fluxos da API **Serverest**. Os testes incluem **cadastro de usuários**, **autenticação** e **gestão de produtos** (CRUD).

## 🛠️ Tecnologias Utilizadas
- **Cypress** - Framework de testes automatizados
- **JavaScript** - Linguagem de programação utilizada
- **Serverest** - API de exemplo utilizada nos testes
- **GitHub Actions** (Opcional) - Para execução automatizada

## 📂 Estrutura do Projeto
```bash
📦 serverest-tests
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e           # Testes de interface
 ┃ ┣ 📂 support       # Comandos customizados
 ┃ ┃ ┗ 📜 commands.js # Arquivo com comandos personalizados
 ┃ ┗ 📜 config.json   # Configuração dos testes
 ┣ 📜 cypress.config.js # Configuração global do Cypress
 ┣ 📜 package.json      # Dependências do projeto
 ┣ 📜 README.md         # Documentação do projeto
```

## ✅ Funcionalidades Testadas
- 📌 **Cadastro de usuários** (gera um novo usuário a cada teste)
- 🔑 **Autenticação** (realiza login com usuário cadastrado)
- 🛍️ **Cadastro de produtos** (cria e valida produtos na API e na interface)
- ❌ **Deleção de produtos** (remove produtos da lista e verifica remoção)

## 🎯 Como Executar o Projeto?
1️⃣ Clone o repositório:
```bash
git clone https://github.com/ggvinos/cypress-performatico.git
```

2️⃣ Instale as dependências:
```bash
npm install
```

3️⃣ Execute os testes no modo interativo:
```bash
npx cypress open
```

4️⃣ Para executar no modo headless:
```bash
npx cypress run
```



