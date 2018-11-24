import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';

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
 	this.app.logIn(this.userName,this.passWord).subscribe()
 }

  
}