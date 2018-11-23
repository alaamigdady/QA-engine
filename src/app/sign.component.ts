import { Component } from '@angular/core';

@Component({
  selector: 'signUp',
  templateUrl: './sign.component.html',
  styleUrls:['./app.component.css']

  
})
export class SignComponent {
	userName : any;
	passWord : any;

	constructor(private app: appService) {
 }

 signUp(){
 	this.app.changeUser(this.userName);
 	this.app.signUp({"userName":this.userName,"passWord":this.passWord}).subscribe()
 }

  
}