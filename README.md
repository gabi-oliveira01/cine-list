Cine List:
O Cine List é um aplicativo mobile desenvolvido em dupla utilizando React Native e Expo. O aplicativo foi criado para organizar uma lista de filmes, permitindo adicionar, editar, excluir e marcar filmes como assistidos e além disso, fácil de ser usado.
Sobre o projeto
Nós escolhemos desenvolver uma lista de filmes porque é uma ideia simples e que permite colocar em prática vários conceitos estudados durante o desenvolvimento mobile, principalmente CRUD, componentes, estados, listas e armazenamento de dados.
A ideia foi criar um aplicativo simples de usar, mas que tivesse as principais funções necessárias para trabalhar esses conceitos.

Tecnologias utilizadas:
React Native
Expo
JavaScript
AsyncStorage
FlatList
Lucide React Native
VS Code
Android Studio
Expo Go

Estrutura do projeto:
cine-list/
│
├── assets/
│
├── src/
│   ├── components/
│   │   ├── Botao.js
│   │   └── FilmeItem.js
│   │
│   └── screens/
│       └── ListaFilmesScreen.js
│
├── App.js
├── index.js
├── app.json
└── package.json
A pasta components contém os componentes que podem ser reutilizados, como os botões e os itens dos filmes. A pasta screens contém a tela principal do aplicativo.

Como desenvolvemos:
1. Criação do projeto
Primeiro criamos o projeto utilizando React Native e Expo. Utilizamos o VS Code para escrever e organizar o código e o Android Studio e o Expo Go para executar e testar o aplicativo.
2. Organização
Depois organizamos os arquivos separando a tela principal dos componentes. Criamos o ListaFilmesScreen.js, o FilmeItem.js e o Botao.js.
Essa divisão ajudou a deixar o código mais organizado e facilitou a reutilização dos componentes.
3. Tela principal
Na tela principal criamos os campos para inserir o título e a categoria do filme. Também adicionamos os botões e a lista onde os filmes cadastrados aparecem.
Utilizamos useState para controlar os dados e FlatList para mostrar os filmes.
4. Funcionalidades
Depois implementamos as funções principais do aplicativo:
Adicionar filmes;
Visualizar filmes;
Editar filmes;
Excluir filmes;
Alterar o status entre assistido e não assistido.
Essas funções representam as operações de um CRUD.
5. Armazenamento
Por último, utilizamos o AsyncStorage para salvar os filmes no dispositivo. Dessa forma, os dados não são perdidos quando o aplicativo é fechado.
Para salvar e recuperar os dados, utilizamos JSON.stringify() e JSON.parse().
CRUD
6. Durante todo o processo fizemos vários pushs para garantir a sincronia de ambas no projeto, onde cada uma fez um pouco.

Operação
Função no aplicativo
Create
Adicionar filme
Read
Visualizar filmes
Update
Editar e alterar status
Delete
Excluir filme
Como executar
Com o projeto aberto no terminal, instalamos as dependências:
npm install
Depois iniciamos o projeto:
npm start
A partir daí, podemos executar o aplicativo pelo Expo Go pelo ambiente Android.
Conclusão
O Cine List foi desenvolvido em dupla com o objetivo de aplicar na prática os conceitos de desenvolvimento mobile que estudamos.
Durante o projeto trabalhamos com componentes, estados, listas, CRUD e persistência de dados. Também buscamos manter o código organizado, separando a tela principal dos componentes reutilizáveis.
A escolha de uma lista de filmes deixou o projeto simples de entender e, ao mesmo tempo, permitiu implementar todas as funcionalidades que precisávamos.