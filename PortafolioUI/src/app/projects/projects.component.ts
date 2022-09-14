import { Component, OnInit } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  listOfProjects: Project[] = [
    {
      projectTitle: 'Expense Control',
      shortDescription: 'Income and expense application made with ASP.NET Core',
      longDescription: 'Expense Control is a system that allows you to track all the expenses and incomes you have more control to take better decitions according to your current situation',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
        './assets/images/logos/JQUERY_logo.png',
      ],
      imageURL: './assets/images/ExpenseControlScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Movies',
      shortDescription: 'App made with Angular and Server made with ASP.NET core',
      longDescription: 'Movies is a web site that shows the current and future most important movie releases',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/MoviesScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Portfolio',
      shortDescription: 'Web page made with Angular and ASP.NET Core',
      longDescription: 'Portfolio is my personal web page where I show the project I am working on and those I worked on',
      tecnologies: [
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/PortfolioScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Expense Control',
      shortDescription: 'Income and expense application made with ASP.NET Core',
      longDescription: 'Expense Control is a system that allows you to track all the expenses and incomes you have more control to take better decitions according to your current situation',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
        './assets/images/logos/JQUERY_logo.png',
      ],
      imageURL: './assets/images/ExpenseControlScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Movies',
      shortDescription: 'App made with Angular and Server made with ASP.NET core',
      longDescription: 'Movies is a web site that shows the current and future most important movie releases',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/MoviesScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Portfolio',
      shortDescription: 'Web page made with Angular and ASP.NET Core',
      longDescription: 'Portfolio is my personal web page where I show the project I am working on and those I worked on',
      tecnologies: [
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/PortfolioScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
  ]


  ngOnInit(): void {
  }

}
