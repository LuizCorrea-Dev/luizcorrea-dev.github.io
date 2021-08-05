/** @format */

import reactIcon from '@iconify/icons-fa-brands/react';
import firebaseIcon from '@iconify/icons-simple-icons/firebase';
import nodejsIcon from '@iconify/icons-fa-brands/node';
import gitIcon from '@iconify/icons-fa-brands/git-alt';
import kotlinIcon from '@iconify/icons-mdi/kotlin'
import androidIcon from '@iconify/icons-mdi/android'
import typescriptIcon from '@iconify/icons-mdi/language-typescript'
import javascriptIcon from '@iconify/icons-mdi/language-javascript'
import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
import sqliteIcon from '@iconify/icons-simple-icons/sqlite'
import reduxIcon from '@iconify/icons-simple-icons/redux'
import expressIcon from '@iconify/icons-simple-icons/express'
import expoIcon from '@iconify-icons/cib/expo';
import nextJs from '@iconify-icons/cib/next-js';
import logoVercel from '@iconify-icons/ion/logo-vercel';


function Skill(name, description, type, icon, scale = 1.0) {
  return {
    name,
    description,
    type,
    icon,
    scale,
  };
}

const skills = [


  Skill(
    'JavaScript',
    'JavaScript foi minha primeira linguagem que aprendí, e até o momento é a que mais domino foram centenas de horas dedicado a esta linguagem.',
    'SE',
    javascriptIcon
  ),

  Skill(
    'NodeJS',
    'Minha tecnologia de back-end favorita que me ajuda a construir APIs rapidamente, além de me dar um bom controle sobre o back-end.',
    'SE',
    nodejsIcon
  ),

  Skill(
    'ReactJS',
    'React é minha biblioteca de front-end favorita e me permite fazer aplicativos da web escalonáveis. Com pacotes como Redux, Axios e Styled-Components, o desenvolvimento web torna-se intuitivo.',
    'SE',
    reactIcon
  ),
  Skill(
    'Redux',
    'O Redux ajuda a escrever aplicativos que se comportam de maneira consistente e centraliza o estado e a lógica do aplicativo permitindo recursos poderosos como desfazer / refazer , persistência de estado e muito mais.',
    'SE',
    reduxIcon
  ),
  Skill(
    'TypeScript',
    'O TypeScript economiza tempo na detecção de erros e no fornecimento de correções antes de executar o código.',
    'SE',
    typescriptIcon
  ),

  Skill(
    'Mongo DB',
    'MongoDB é um banco de dados não relacional com a escalabilidade, flexibilidade, consulta e indexação que sem pre ajudou nos meus projetos',
    'SE',
    mongodbIcon
  ),
  Skill(
    'NextJs',
    'Next.js oferece solução nativa de alguns problemas conhecidos do ReactJS. com todos os recursos de produção: renderização híbrida estática e de servidor, suporte a JavaScript e TypeScript, agrupamento inteligente, pré-busca de rota e muito mais.',
    'SE',
    nextJs,
 
  ),
  Skill(
    'Vercel',
    'Vercel é o melhor lugar para implantar qualquer aplicativo e protótipos de front-end, com deply automático e muita agilidade no desempenho do usuário final',
    'SE',
    logoVercel,
    
  ),
  Skill(
    'Firebase',
    'O Firebase me ajuda a criar aplicativos confiáveis e sem servidor. Prático para usar quando preciso implementar autenticação, armazenamento de dados ou hospedagem.',
    'SE',
    firebaseIcon,
    0.92
  ),
  Skill(
    'SQLite',
    'SQLite é uma base de dados relacional e podem ter acesso a banco de dados SQL sem executar um processo SGBD separado, armazenando seus arquivos dentro de sua própria estrutura.',
    'SE',
    sqliteIcon
  ),

  Skill(
    'Git',
    "Eu sempre uso o controle de versão do Git ao trabalhar em um projeto, mesmo se estou trabalhando sozinho. Git torna a colaboração com outros desenvolvedores muito mais fácil.",
    'SE',
    gitIcon
  ),
  
  Skill(
    'Express',
    "O Express é um framework para aplicativo da web do Node.js usa métodos HTTP e middleware, criar uma API que fornece um conjunto robusto de recursos para aplicativos web e móvel.",
    'SE',
    expressIcon
  ),
  
 


  //----------- Mobile -------------//

 
  Skill(
    'Kotlin',
    'Kotlin é minha linguagem favorita para desenvolver apps mobile, com o Android Studios fica muito rápido e melhor para criar com mais produtividade. ',
    'DSAI',
    kotlinIcon
  ),

  Skill(
    'React Native',
    'React Native foi meu primeiro contato com criação de aplicativos movel é uma biblioteca Javascript, é usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa',
    'DSAI',
    reactIcon
  ),

  Skill(
    'Android',
    'Com o Android emulado no meu pc, fica fácil visualizar e otimizar o app para diversos dispositivos',
    'DSAI',
    androidIcon
  ),
  Skill(
    'Expo',
    'Expo é uma plataforma de código aberto para fazer aplicativos nativos universais para Android, iOS e web com JavaScript e React.',
    'DSAI',
    expoIcon
  ),


];

export default skills;
