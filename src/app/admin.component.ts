import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls:['./app.component.css']

  
})
export class AdminComponent {
	
	questions:any;
	answer: any;
	
	constructor(private app: appService , private router: Router) {
 }

 
ngOnInit(){
 this.app.getAllQuestions().subscribe(data => 
 		{this.questions=data},(err)=>{console.log('error')})
 }

 answerQ(id,ans){
 this.app.answer({"answer":ans,"id":id}).subscribe((data) => {
 	if(data){
 	console.log('done')
 	this.app.getAllQuestions().subscribe(data => 
 		{this.questions=data},(err)=>{console.log('error')})
// this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
// this.router.navigate(["/admin"])); 
}
 })
 }

 
}