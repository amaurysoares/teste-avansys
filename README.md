# Projeto teste para Avansys

## Arquitetura utilizada no projeto

Docker, Docker-compose, Laravel, Laravel passport, Vue.js com Vuex e Axios, e banco de dados MySql

## Configuração/instalação
-Clone o repositório utilize o comando "docker-compose up -d" para iniciar os containers
-Com os containers ativos e ainda na pasta raiz do projeto digite "docker-compose exec php-fpm bash"


### Problemas no desenvolvimento

#### Tecnologias utilizadas
Tive dúvidas sobre a implementação do vuex, demorou um pouco para entender o funcionamento dele. 

#### Interface FIGMA
Sobre a interface feita no FIGMA tive também algumas dúvidas sobre telas e funcionalidades, como por ex. como deveria ser a tela de operadora selecionada, inclusive fiquei em dúvida sobre isso, o ideal é que ali fosse uma busca simples pela operadora, ao invés de um select, ou talvez não tenha entendido se uma operadora é uma "entidade" ou um "tipo/categoria", decidi focar em fazer o filtro de operadoras ativas/inativas. 

#### Pendências
Ficou faltando implementar as ações "em lote", selecionar todas as operadores e ativar/desativar e/ou excluir/deletar.


### Adicionais
Além da utilização do DOCKER, Implementei um sistema de autenticação com vue/vuex, fazendo a proteção com autenticação das rotas da API utilizando o Laravel passport. No vue.js utilizei uma espécie de middleware que configura o padrão a ser utilizado em cada request via AXIOS. 




