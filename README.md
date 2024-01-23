# Zappts Challenge QA  - Playwright #

Este projeto foi criado para executar testes automatizados de uma API com a criação de um usuário.

## Ferramentas

Lista de frameworks utilizados:
- **Playwright**: para escrever o código de Testes.
- **Reqres.in**: API Fake para testes,

Para a realização deste challenge foram utilizadas apenas ferramentas open-source.

## Estrutura do Projeto

```
Projeto
├── playwright-report
|   ├── index.html
├── test-results
├── tests
|   ├── api_user_tests.spec.js
├── test-examples
|   ├── demo-todo-app.spec.js
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.js
├── README.md
├── report.html


```   

## Requisitos

Antes de rodar os testes, é necessário possuir os seguintes ítens:

[Node/npm]

[Playwright]

## Cenários
1 - Listar todos os usuários

2 - Criar um usuario com sucesso

3 - Cenario de erro - URL Inválida

*A API utilizada para testes aceita a inserção de caracteres especiais, bem como campos em branco, não sendo considerados os mesmos como cenários negativos.*


## Configuração do Projeto

- Os testes podem ser executados executados no terminal ou na interface do Playwright.
- Os relatórios são gerados em formato html.


## Executando os testes

Para realizar os testes via terminal, execute o seguinte comando:

```
$ npx playwright test                                          
```
Para realizar os testes via interface, execute o seguinte comando:

```
$ npx playwright test --ui                                           
```
Para visualizar o relatório de execução dos testes, execute o seguinte comando: 

```
$ npx playwright show-repor                                          
```