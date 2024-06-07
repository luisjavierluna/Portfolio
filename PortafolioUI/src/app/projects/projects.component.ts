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
      projectTitle: 'EventPlanner',
      shortDescription: 'Website for the organization and management of events. As an organizer you can find suppliers and as a supplier you can find events to participate in.',
      longDescription: 'API made with ASP.NET and UI made with React and Vite. EFC as ORM, Identity for user management, Authentication and Authorization, and layered architecture.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/AZURE_logo.png',
      ],
      imageURL: './assets/images/EventPlannerSS.png',
      link: 'https://s14-32-csharp.vercel.app',
      githublink: 'https://github.com/luisjavierluna/s14-32-csharp'
    },
    {
      projectTitle: 'Easy Turnos',
      shortDescription: 'Website for professionals looking to manage appointments with their clients easily and quickly.',
      longDescription: 'API made with ASP.NET and UI made with React and Vite. EFC as ORM, Identity for user management, Authentication and Authorization, and layered architecture.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/AZURE_logo.png',
      ],
      imageURL: './assets/images/EasyTurnos.png',
      link: 'https://easy-turnos.vercel.app',
      githublink: 'https://github.com/NoCountrySimulacion/EasyTurnos'
    },
    {
      projectTitle: 'Team Track',
      shortDescription: 'Web application for managing remote work teams.',
      longDescription: 'API made with ASP.NET and UI made with Angular 16. EFC as ORM, Identity for user management, Authentication and Authorization, and standar architecture.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/AZURE_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/TeamTrackSS.png',
      link: 'https://danilo0203.github.io/Team-Track/#/panel',
      githublink: 'https://github.com/luisjavierluna/c16-76-m-csharp'
    },
    {
      projectTitle: 'Sólo respira',
      shortDescription: 'Candles and concrete bases store website made with ASP.NET and Angular.',
      longDescription: 'API made with ASP.NET and UI made with Angular. I used EF Core as ORM for the connection to the database, Identity and Route Guards for the user system, authentication and authorization.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/AZURE_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/HTML_logo.png',
        './assets/images/logos/CSS_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/SPSS.png',
      link: '',
      githublink: 'https://github.com/luisjavierluna/SoloRespira-2022-'
    },
    {
      projectTitle: 'Cine la Mina',
      shortDescription: 'Movie Theater Website: Website showing current and upcoming releases made with ASP.NET and Angular',
      longDescription: 'API made with ASP.NET and UI made with Angular. I used EF Core as ORM, Identity and Route Guards for user system, authentication and authorization, Angular Material, Markdown and Maps with Leafleat.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
        './assets/images/logos/AZURE_logo.png',
      ],
      imageURL: './assets/images/MoviesScreenshoot.png',
      link: 'https://luisjavierluna.github.io/Movies/',
      githublink: 'https://github.com/luisjavierluna/Movies'
    },
    {
    projectTitle: 'Asesor Inmobiliario',
      shortDescription: 'Personal and professional website focused on real estate',
      longDescription: 'API made with ASP.NET and UI made with Angular. I used EF Core as ORM, Identity and Route Guards to manage the user system, authentication and authorization.',
      tecnologies: [
        './assets/images/logos/C_SHARP_logo.png',
        './assets/images/logos/NET_CORE_logo.png',
        './assets/images/logos/SQL_logo.png',
        './assets/images/logos/Angular_logo.png',
        './assets/images/logos/Typescript_logo.png',
        './assets/images/logos/BOOTSTRAP_logo.png',
      ],
      imageURL: './assets/images/BienesRaicesSS.png',
      link: '',
      githublink: 'https://github.com/luisjavierluna/BienesRaices'
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
        './assets/images/logos/AZURE_logo.png',
      ],
      imageURL: './assets/images/ExpenseControlScreenshoot.png',
      link: 'https://expensecontrolaspnet20221116161254.azurewebsites.net/users/login?ReturnUrl=%2F',
      githublink: 'https://github.com/luisjavierluna/ExpenseControl_ASP.NET'
    },
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
  ]

  ngOnInit(): void {
  }

}
