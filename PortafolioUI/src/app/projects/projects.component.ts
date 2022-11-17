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
      projectTitle: 'Infinite',
      shortDescription: 'Computer and technology store website made with ASP.NET and Angular',
      longDescription: 'API made with ASP.NET and UI made with Angular. I used EF Core as ORM for the connection to the database, Identity and Route Guards for the user system, authentication and authorization and the MVC architectural pattern.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/Infinite.png',
      link: '',
      githublink: 'https://github.com/luisjavierluna/Mall'
    },
    {
      projectTitle: 'Portfolio',
      shortDescription: 'Basic resume made mostly with Angular',
      longDescription: 'Web application made almost entirely with Angular. The backend elements were removed to make it a static website and easier to navigate.',
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
      link: 'https://luisjavierluna.github.io/Portfolio/',
      githublink: 'https://github.com/luisjavierluna/Portfolio'
    },
    {
      projectTitle: 'Expense Control',
      shortDescription: 'App to track income and expenses made with ASP.NET',
      longDescription: 'Web application, made entirely with ASP.NET. I used Dapper as ORM for the connection to the database, Identity for the user system, authentication and authorization and the MVC architectural pattern.',
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
      link: 'https://expensecontrolaspnet20221116161254.azurewebsites.net/users/login?ReturnUrl=%2F',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
    {
      projectTitle: 'Movies',
      shortDescription: 'Movie Theater Website: Website showing current and upcoming releases made with ASP.NET and angular',
      longDescription: 'API made with ASP.NET and UI made with Angular. I used EF Core as ORM, Identity and Route Guards for user system, authentication and authorization, Angular Material, Markdown and Maps with Leafleat.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/MoviesScreenshoot.png',
      link: '',
      githublink: 'https://github.com/luisjavierluna/Movies'
    },
    
  ]


  ngOnInit(): void {
  }

}
