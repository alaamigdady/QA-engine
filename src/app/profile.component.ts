import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls:['./app.component.css']

  
})
export class ProfileComponent {
	userName : string;
	answers : any;
	question:any;
	
	constructor(private app: appService) {
 }

 
ngOnInit(){
 this.app.currentUser.subscribe(userName => this.userName = userName)
 this.app.getAllAnswers().subscribe(data => 
 		{this.answers=data},(err)=>{console.log('error')})
 }

 ask(){
 console.log(this.userName , this.question)
 	this.app.ask({"question":this.question,"user":this.userName})
 }
  
}