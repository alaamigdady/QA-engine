import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls:['./app.component.css']

  
})
export class ProfileComponent {
	userName : string;
	answers : any;
	question:any;
	
	constructor(private app: appService , private router: Router) {
 }

 
ngOnInit(){
 this.app.currentUser.subscribe(userName => this.userName = userName)
 this.app.getAllAnswers().subscribe(data => 
 		{this.answers=data},(err)=>{console.log('error')})
 }

 ask(){
 	this.app.ask({"question":this.question,"user":this.userName}).subscribe((data) => {
 		if(data){
 			console.log('done')
 			this.question='';
//  		this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
// this.router.navigate(["/profile"])); 
}
 	
 	})

 }
  
}