<h1 align="center">Contact Manager</h1>
<p>O projeto contact manager é um projeto que permite o usuário gerenciar seus contatos, podendo cadastrá-los, editá-los ou removê-los se assim desejar.
</p>

<h2 align="center">Navegar</h2>

<div align="center">
=== <a href="#configurar-back-end">Configurar back-end</a>
=== <a href="#configurar-front-end">Configurar front-end</a>
=== <a href="#rotas">Rotas</a>
=== <a href="#usuários">Usuários</a>
=== <a href="#contatos">Contatos</a>
</div>

## OBS: Configure a aplicação, seguindo a ordem cronológica deste documento, e tenho certeza que vai dar tudo certo!

# Rodar localmente

- A aplicação está estruturada seguindo o modelo monolito, por isso será necessário navegar pelas pastas e rodar o back end e o front end separadamente.

 - Faça o clone do repositório:
 
``` bash
  git clone git@github.com:cesarrafaeljunior/contact_manager.git
```
- Rode o comando para entrar na pasta do repositório:
``` bash
  cd contact_manager
```

## Configurar back-end:

- Rode o comando para entrar na pasta do back end da aplicação:
``` bash
  cd back
```
- Instale as dependências:
``` bash
  npm i
```
ou, caso esteja utilizando o gerenciador de pacotes "Yarn"
``` bash
  yarn add 
```
### Variáveis de ambiente:
- Será necessário criar um arquivo .env, e cadastrar as credenciais da conexão com o banco de dados, seguindo o exemplo do arquivo .env.example
``` javaScript
DBCONNECTION = //O nome do banco de dados que está utilizando
PGHOST = //localhost
PGUSERNAME = //seu usuário postgres
PGPASSWORD = //sua senha postgres
PGDATABASE = //sua database
PGPORT = //porta do postgres
SECRET_KEY = //chave secreta
```
- Após a configuração das variáveis, rode o comando de migrações:
``` bash
npm run typeorm migration:run -- -d ./src/data-source
```
- O back end da aplicação está pronto para ser rodado, basta digitar o comando:
``` bash
npm run dev
```
ou, caso esteja utilizando o gerenciador de pacotes "Yarn"
``` bash
yarn dev
```

## Configurar front-end:
- Se você seguiu na ordem as configurações, você estará na pasta do back end da aplicação, então basta voltar uma pasta e entrar na de front-end:
``` bash
cd ..
cd front
```

- Instale as dependências:
``` bash
npm i
```
ou, caso esteja utilizando o gerenciador de pacotes "Yarn"
``` bash
yarn add
```

- Rode a aplicação
``` bash
npm run dev
```
ou, caso esteja utilizando o gerenciador de pacotes "Yarn"
``` bash
yarn dev
```

## Rotas

### Rotas que não precisam de autenticação:

## Usuários

### Criação de usuário

`POST /client - FORMATO DE REQUISIÇÃO`

<p>Exemplo de requisição</p>

```json

{
	"fullName": "teste",
	"username": "teste",
	"email":"teste@gmail.com",
	"password": "123456789",
	"telephone": "+55 77 90909090"
}
```

`POST /client - FORMATO DE RESPOSTA- Status Code - 201`
<P>Exemplo de resposta</p>

```json
{
	"fullName": "teste",
	"username": "teste",
	"email":"teste@gmail.com",
	"telephone": "+55 77 90909090"
	"id": "8881715d-1833-45f8-bfc1-445f0f5b1f00",
	"createdAt": "2023-03-24T16:22:47.649Z"
}
```
### Login de usuário

`POST /login - FORMATO DE REQUISIÇÃO`

<p>Exemplo de requisição</p>

```json

{
	"username": "teste",
	"password": "12345678"
}
```

`POST /login - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNlc2FyIiwiaWF0IjoxNjc5OTMxNjU2LCJleHAiOjE2ODAwMTgwNTYsInN1YiI6ImE5ZTVkNzdlLTZmYjAtNDMwYS1iZDM0LTlmYjJlOTM5NGJkNSJ9.Wc4YnRRrmoyoKVWCRxC6C58E2qRi_DCqJOPDnf53BZE"
}
```
## Rotas protegidas por autenticação:

### Recuperar informaçôes do usuário logado:

`GET /client - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
{
	"fullName": "teste",
	"username": "teste",
	"email":"teste@gmail.com",
	"telephone": "+55 77 90909090"
	"id": "8881715d-1833-45f8-bfc1-445f0f5b1f00",
	"createdAt": "2023-03-24T16:22:47.649Z"
}
```

### Editar informações do usuário logado:

`PATCH /client/id - FORMATO DE REQUISIÇÃO`
<P>Exemplo de requisição</p>

```json
{
	"username": "teste att"
}
```

`PATCH /client/id - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
{
	"fullName": "teste",
	"username": "teste att",
	"email":"teste@gmail.com",
	"telephone": "+55 77 90909090"
	"id": "8881715d-1833-45f8-bfc1-445f0f5b1f00",
	"createdAt": "2023-03-24T16:22:47.649Z"
}
```
### Deletar a conta do usuário logado:

`DELETE /client/id - FORMATO DE RESPOSTA- Status Code - 204`
```json
no body
```

## Contatos

### Criação de um contato:

`POST /contact - FORMATO DE REQUISIÇÃO`
<p>Exemplo de requisição</p>

```json
{
	"fullName": "teste contact",
	"email": "teste@gmail.com",
	"telephone": "+55 58 90909090"
}
```

`POST /contact - FORMATO DE RESPOSTA- Status Code - 201`
```json
{
	"fullName": "teste contact",
	"email": "teste@gmail.com",
	"telephone": "+55 58 9090909090",
	"id": "abbdba7f-3ec5-4ee8-8116-90d73f78bb49",
	"createdAt": "2023-03-27T15:40:59.756Z"
}
```
### Buscar todos os contatos do usuário logado:

`GET /contact - FORMATO DE RESPOSTA- Status Code - 200`
```json
{
	"id": "a9e5d77e-6fb0-430a-bd34-9fb2e9394bd5",
	"fullName": "client",
	"telephone": "+ 55 9090909090",
	"contacts": [
		{
			"id": "5b845d41-abed-4198-9951-5575e28f26ca",
			"fullName": "contact 1",
			"email": "teste@gmail.com",
			"telephone": "+55 9090909090",
			"createdAt": "2023-03-27T17:46:24.812Z"
		},
		{
			"id": "9059f467-c36c-44ba-8566-dce6f478c8e7",
			"fullName": "contact 2",
			"email": "teste@gmail.com",
			"telephone": "+55 9090909090",
			"createdAt": "2023-03-27T18:15:50.973Z"
		}
	]
}
```
### Buscar um contato específico do usuário logado:

`GET /contact/id - FORMATO DE RESPOSTA- Status Code - 200`

```json
{
	"fullName": "teste",
	"email": "teste@gmail.com",
	"telephone": "+55 58 9090909090",
	"id": "abbdba7f-3ec5-4ee8-8116-90d73f78bb49",
	"createdAt": "2023-03-27T15:40:59.756Z"
}
```
### Atualizar informações de um contato do usuário logado:

`PATCH /contact/id - FORMATO DE REQUISIÇÃO`
<P>exemplo de requisição</p>

```json
{
	"fullName": "contact att"
}
```

`PATCH /contact/id - FORMATO DE RESPOSTA - Status Code - 200`
<P>exemplo de requisição</p>

```json
{
	"fullName": "contact att",
	"email": "teste@gmail.com",
	"telephone": "+55 58 9090909090",
	"id": "abbdba7f-3ec5-4ee8-8116-90d73f78bb49",
	"createdAt": "2023-03-27T15:40:59.756Z"
}
```

### Excluir um contato do usuário logado:
`DELETE /contact/id - FORMATO DE RESPOSTA - Status Code - 204`

```json
no body
```

<a href="#navegar">Voltar ao topo</a>
