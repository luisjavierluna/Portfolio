import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  toolsIcons = [
    './assets/images/logos/C_SHARP_logo.png',
    './assets/images/logos/NET_CORE_logo.png',
    './assets/images/logos/SQL_logo.png',
    './assets/images/logos/Angular_logo.png',
    './assets/images/logos/AZURE_logo.png',
  ];

  constructor() { }

  

}
