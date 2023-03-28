<h1 align="center">Contact Manager</h1>
<p>O projeto contact manager é um projeto que permite o usuário a gerenciar seus contatos, podendo cadastrá-los, editá-los ou removê-los se assim desejar, possui uma interface amigável e fácil de se navegar, basta cadastrar um usuário e começar a utilizar.
</p>

<h2 align="center">Navegar</h2>

<div align="center">
=== <a href="#configurar-back-end">Configurar back-end</a>
=== <a href="#configurar-front-end">Configurar front-end</a>
=== <a href="#rotas">Rotas</a>
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
DBCONNECTION =
PGHOST =
PGUSERNAME = 
PGPASSWORD = 
PGDATABASE = 
PGPORT = 
PORT = 
SECRET_KEY =
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



