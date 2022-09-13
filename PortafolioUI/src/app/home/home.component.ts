import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  emailInSight?: boolean = false;
  showHideText?: string = 'Show Email';

  numberInSight?: boolean = false;

  constructor() { }

  showEmail():boolean{
    if(this.emailInSight){
      return this.emailInSight = false;
    }else{
      return this.emailInSight = true;
    }
  }

  showNumber():boolean{
    if(this.numberInSight){
      return this.numberInSight = false;
    }else{
      return this.numberInSight = true;
    }
  }

}
