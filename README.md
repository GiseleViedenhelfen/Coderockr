# Coderockr frontend-test
Projeto criado para vaga de frontend em níveis iniciais de carreira.

# Objetivo
Criar uma aplicação que consome uma api, faça a renderização de cards seguindo o layout proposto e, ao clicar em algum card, ser feito o redirecionamento para a página de detalhes do item escolhido.
A página principal, em que são exibidos os cards, deve ter scroll infinito. Esse estilo se caracteriza pelo carregamento de itens conforme o usuário scrolla a página.
Além da página inicial e de detalhes existem mais dois componentes, header e formulário de contato.
O header deve ter pelo menos três componentes, o primeiro com o nome da aplicação,o segundo 'posts' e o terceiro, 'contact'. Os primeiro e segundo itens não ficou especificado o que deferia fazer, mas o terceiro deve abrir um modal com formulário onde o usuário pode entrar em contato.
É solicitado que a aplicação tenha responsividade.
# Tecnologias usadas
O projeto foi desenvolvido basicamente utilizando a biblioteca React. Por meio dela, foi feita a construção do HTML e junção desse com a lógica javascript.

Bibliotecas adicionais foram utilizadas para renderização de páginas e criação do modal.
Para a renderização de páginas foi utilizada a biblioteca React Router DOM, para o modal foi utilizada a Reactjs-popup.
Ambas tem utilização intuitiva e documentação consistente, podem ser acessadas pelos links:
https://www.npmjs.com/package/react-router-dom e https://www.npmjs.com/package/reactjs-popup respectivamente.

Para a estilização foi utilizado CSS vanilla com colaboração da biblioteca Reactjs-popup para o melhor design dele.
Para observar os eventos de scroll foi feita manipulação do DOM.
Para ajudar a manter o código padronizado, foi utilizado Eslint(AirBnB).

# Desenvolvimento
O projeto foi desenvolvido em fases: 
1. aproximação inicial, com a criação de esqueletos para as páginas e componentes.
2. lógica para renderização dos cards com retorno fixo, desenvolvimento do restante das funcionalidades (funcionalidades para cada item do header, redirecionamento para a página de detalhes pelo clique e setup inicial do modal para formulário);
3. esboço da estilização para todos os componentes e páginas;
4. refatoração da lógica de renderização para retorno indefinido da api;
5. estilização final utilizando display grid para cards e adicionando responsividade;
6. adicionar verificações para o formulário dando retorno para o usuário se seria possível ou não submeter para envio. 
7. ajustes finais no header, para que respondesse melhor no scroll e diferentes telas.

# Instalação e utilização
é necessário ter instalado no computador Node (recomendado v16.14.0 lts/gallium)
No ícone "Code", faça o download do projeto via git clone ou download pela opção zip; 
abra o terminal e entre na pasta do projeto;
no terminal, rode os seguintes comandos:
1. git checkout development
2. npm install
3. npm start