import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Soutenance_Dahboard';
 sideBarOpen=true;
  ngOnInit(){

  }
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
