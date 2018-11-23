import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls:['./app.component.css']

  
})
export class ProfileComponent {
	
	questions:any;
	answer: any;
	
	constructor(private app: appService) {
 }

 
ngOnInit(){
 this.app.getAllQuestions().subscribe(data => 
 		{this.questions=data},(err)=>{console.log('error')})
 }

 answer(id){
 this.app.answer({"answer":this.answer,"id":id})
 }

 
}