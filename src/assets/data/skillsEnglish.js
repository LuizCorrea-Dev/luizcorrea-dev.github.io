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
    "JavaScript was my first language I learned, and so far it's the one I've mastered the most were hundreds of hours dedicated to this language.",
    'SE',
    javascriptIcon
  ),

  Skill(
    'NodeJS',
    'My favorite backend technology that helps me build APIs quickly and gives me good control over the backend.',
    'SE',
    nodejsIcon
  ),

  Skill(
    'ReactJS',
    'React is my favorite front-end library and allows me to make scalable web apps. With packages like Redux, Axios and Styled-Components, web development becomes intuitive.',
    'SE',
    reactIcon
  ),
  Skill(
    'Redux',
    'Redux helps you write applications that behave consistently and centralize application state and logic enabling powerful features like undo / redo , state persistence and more.',
    'SE',
    reduxIcon
  ),
  Skill(
    'TypeScript',
    'TypeScript saves time detecting errors and providing fixes before executing code.',
    'SE',
    typescriptIcon
  ),

  Skill(
    'Mongo DB',
    'MongoDB is a non-relational database with the scalability, flexibility, query and indexing that has always helped my projects',
    'SE',
    mongodbIcon
  ),
  Skill(
    'NextJs',
    'Next.js offers native solution to some known ReactJS issues. with all the production features: static and server hybrid rendering, JavaScript and TypeScript support, intelligent grouping, route prefetching and more.',
    'SE',
    nextJs,
 
  ),
  Skill(
    'Vercel',
    'Vercel is the best place to deploy any application and front-end prototypes, with automatic deply and a lot of agility in end-user performance',
    'SE',
    logoVercel,
    
  ),
  Skill(
    'Firebase',
    'Firebase helps me build reliable, serverless applications. Practical to use when I need to implement authentication, data storage or hosting.',
    'SE',
    firebaseIcon,
    0.92
  ),
  Skill(
    'SQLite',
    'SQLite is a relational database and can have access to SQL database without running a separate DBMS process, storing its files within its own structure.',
    'SE',
    sqliteIcon
  ),

  Skill(
    'Git',
    "I always use Git version control when working on a project, even if I'm working alone. Git makes collaborating with other developers much easier.",
    'SE',
    gitIcon
  ),
  
  Skill(
    'Express',
    "Express is a Node.js web application framework using HTTP methods and middleware, creating an API that provides a robust set of features for web and mobile applications.",
    'SE',
    expressIcon
  ),
  
 


  //----------- Mobile -------------//

 
  Skill(
    'Kotlin',
    "Kotlin is my favorite language for developing mobile apps, with Android Studios it's much faster and better to create more productively.",
    'DSAI',
    kotlinIcon
  ),

  Skill(
    'React Native',
    'React Native was my first contact with creating mobile apps is a Javascript library, it is used to develop apps for Android and iOS systems natively',
    'DSAI',
    reactIcon
  ),

  Skill(
    'Android',
    "With Android emulated on my pc, it's easy to view and optimize the app for multiple devices",
    'DSAI',
    androidIcon
  ),
  Skill(
    'Expo',
    'Expo is an open source platform for making universal native apps for Android, iOS and the web with JavaScript and React',
    'DSAI',
    expoIcon
  ),


];

export default skills;
