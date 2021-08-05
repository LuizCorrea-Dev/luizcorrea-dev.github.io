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

    'The goal of the project is to create an application to return your own portfolio to github in an elegant and simplified way, using Kotlin design patterns and good programming practices. Technically, a native Android App was developed for creating and listing repositories on github. Finally, the challenge is to deliver your own project, incorporating your own evolutions and improvements!',

    'https://github.com/LuizCorrea-Dev/GitHub_Search', //link do código
    'https://github.com/LuizCorrea-Dev/GitHub_Search',// link do projeto
    githubSearch // imagem do projeto
  ),
  Project(
    'Business Card - Bootcamp Inter Android Developer',

    'The aim of the project is to create an application to generate your own personal business card, using Kotlin design patterns and good programming practices. Technically, a native Android App was developed for the creation and listing of cards, which can have the following data: name, company, contact phone, email and background color. All this using Room to store data locally. Finally, the challenge is to deliver your own project, incorporating your own evolutions and improvements!',

    'https://github.com/LuizCorrea-Dev/BusinessCard', //link do código
    'https://github.com/LuizCorrea-Dev/BusinessCard',// link do projeto
    businessCard // imagem do projeto
  ),
  Project(
    'Todo List - Bootcamp Kotlin Santander',
    'The aim of the project is to create a To App from the list from scratch showing the development process using Kotlin.',
    'https://github.com/LuizCorrea-Dev/TodoList', //link do código
    'https://github.com/LuizCorrea-Dev/TodoList',// link do projeto
    todoList // imagem do projeto
  ),

  //  projetos ocultos ↓

  Project(
    'Santander Dev Week project at Digital Innovation One',
    'The project was developed with MVVM architecture, using native Android components, Material Designer, integration with Firebase and internationalization between Portuguese and English.',
    'https://github.com/LuizCorrea-Dev/SantanderDevWeek', //link do código
    'https://github.com/LuizCorrea-Dev/SantanderDevWeek',// link do projeto
    santanderDevWeek // imagem do projeto
  ),
  Project(
    'Bootcamp Challenges Everis Kotlin Developer at Digital Innovation One',
    'A compilation of resolutions to the Everis bootcamp challenges',
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
