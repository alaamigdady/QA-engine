import { Component } from '@angular/core';
import {appService} from './app.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls:['./app.component.css']

  
})
export class AdminComponent {
	
	questions:any;
	answer: any;
	
	constructor(private app: appService) {
 }

 
ngOnInit(){
 this.app.getAllQuestions().subscribe(data => 
 		{this.questions=data},(err)=>{console.log('error')})
 }

 answerQ(id,ans){
 this.app.answer({"answer":ans,"id":id}).subscribe()
 }

 
}