import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'signUp',
  templateUrl: './sign.component.html',
  styleUrls:['./app.component.css']

  
})
export class SignComponent {
	userName : any;
	password : any;

	constructor(private app: appService) {
 }

 signUp(){
 	this.app.changeUser(this.userName);
 	this.app.signUp({"userName":this.userName,"password":this.password}).subscribe()
 }

  
}