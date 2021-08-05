/** @format */
import portfolio from '../images/portfolio.png';
import githubSearch from '../images/GitHubSearch.png';
import businessCard from '../images/BusinessCard.png';
import todoList from '../images/Todo-List.png';
import santanderDevWeek from '../images/SantanderDevWeek.png';
import everisKDesafio from '../images/everisKDesafio.png';

function Project(title, description, github, demo, image) {
  return {
    title,
    description,
    github,
    demo,
    image,
  };
}

const projects = [
  Project(
    'GitHub Search - Bootcamp Inter Android Developer',

    'O objetivo do projeto é criar uma aplicação para retornar o seu próprio portifólio no github de maneira elegante e simplificada, usando padrões de projeto e boas práticas de programação Kotlin. Tecnicamente, foi desenvolvido um App Android nativo para a criação e listagem dos repositórios no github. Por fim, o desafio é entregar seu próprio projeto, incorporando as próprias evoluções e melhorias!',

    'https://github.com/LuizCorrea-Dev/GitHub_Search', //link do código
    'https://github.com/LuizCorrea-Dev/GitHub_Search',// link do projeto
    githubSearch // imagem do projeto
  ),
  Project(
    'Business Card - Bootcamp Inter Android Developer',

    'O objetivo do projeto é criar uma aplicação para gerar o seu próprio cartão de visitas pessoal, usando padrões de projeto e boas práticas de programação Kotlin. Tecnicamente, foi desenvolvido um App Android nativo para a criação e listagem dos cartões, os quais podem ter os seguintes dados: nome, empresa, telefone de contato, email e cor de fundo. Tudo isso utilizando o Room para armazenar os dados localmente. Por fim, o desafio é entregar seu próprio projeto, incorporando as próprias evoluções e melhorias!',

    'https://github.com/LuizCorrea-Dev/BusinessCard', //link do código
    'https://github.com/LuizCorrea-Dev/BusinessCard',// link do projeto
    businessCard // imagem do projeto
  ),
  Project(
    'Todo List - Bootcamp Kotlin Santander',
    'O objetivo do projeto é criar um App de To do list do zero mostrando o processo de desenvolvimento usando Kotlin.',
    'https://github.com/LuizCorrea-Dev/TodoList', //link do código
    'https://github.com/LuizCorrea-Dev/TodoList',// link do projeto
    todoList // imagem do projeto
  ),

  //  projetos ocultos ↓

  Project(
    'Projeto do Santander Dev Week na Digital Innovation One',
    'O projeto foi desenvolvido com arquitetural MVVM, usando os componentes nativos do Android, Material Designer, integração com o Firebase e a internacionalização entre os idiomas Português e Inglês.',
    'https://github.com/LuizCorrea-Dev/SantanderDevWeek', //link do código
    'https://github.com/LuizCorrea-Dev/SantanderDevWeek',// link do projeto
    santanderDevWeek // imagem do projeto
  ),
  Project(
    'Desafios do Bootcamp Everis Kotlin Developer na Digital Innovation One',
    'Um compilado de resoluçoes dos desafios do bootcamp da Everis',
    'https://github.com/LuizCorrea-Dev/everisKotlinDeveloper-bootcamp', //link do código
    'https://github.com/LuizCorrea-Dev/everisKotlinDeveloper-bootcamp',// link do projeto
    everisKDesafio // imagem do projeto
  ),
  /* //modelo
  Project(
    'Projeto ',
    'Descrição do projeto .',
    '#', //link do código
    '#',// link do projeto
    portfolio // imagem do projeto
  ),*/
];

export default projects;
