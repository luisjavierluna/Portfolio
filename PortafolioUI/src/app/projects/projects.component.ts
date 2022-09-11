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
      tecnologies: ['C#', 'ASP.NET', 'Dapper', 'SQL Server', "Identity"],
      imageURL: './assets/images/ExpenseControlScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Movies',
      shortDescription: 'App made with Angular and Server made with ASP.NET core',
      longDescription: 'Movies is a web site that shows the current and future most important movie releases',
      tecnologies: ['C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'Angular', 'TypeScript', 'Bootstrap'],
      imageURL: './assets/images/MoviesScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Portfolio',
      shortDescription: 'Web page made with Angular and ASP.NET Core',
      longDescription: 'Portfolio is my personal web page where I show the project I am working on and those I worked on',
      tecnologies: ['Angular', 'TypeScript', 'Bootstrap','C#', 'ASP.NET', 'Entity Framework', 'SQL Server'],
      imageURL: './assets/images/PortfolioScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Expense Control',
      shortDescription: 'Income and expense application made with ASP.NET Core',
      longDescription: 'Expense Control is a system that allows you to track all the expenses and incomes you have more control to take better decitions according to your current situation',
      tecnologies: ['C#', 'ASP.NET', 'Dapper', 'SQL Server', "Identity"],
      imageURL: './assets/images/ExpenseControlScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Movies',
      shortDescription: 'App made with Angular and Server made with ASP.NET core',
      longDescription: 'Movies is a web site that shows the current and future most important movie releases',
      tecnologies: ['C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'Angular', 'TypeScript', 'Bootstrap'],
      imageURL: './assets/images/MoviesScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Portfolio',
      shortDescription: 'Web page made with Angular and ASP.NET Core',
      longDescription: 'Portfolio is my personal web page where I show the project I am working on and those I worked on',
      tecnologies: ['Angular', 'TypeScript', 'Bootstrap','C#', 'ASP.NET', 'Entity Framework', 'SQL Server'],
      imageURL: './assets/images/PortfolioScreenshoot.png',
      link: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET/commits/master',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    }
  ]


  ngOnInit(): void {
  }

}
