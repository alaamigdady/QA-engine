import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls:['./app.component.css']

  
})
export class MainComponent {
	userName : any;
	passWord : any;

	constructor(private app: appService) {
 }

 logIn(){
 	this.app.changeUser(this.userName);
 	this.app.logIn({"userName":this.userName,"passWord":this.passWord}).subscribe()
 }

  
}