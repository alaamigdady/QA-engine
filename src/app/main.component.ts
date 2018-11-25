import { Component } from '@angular/core';
import {appService} from './app.service';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router'


@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls:['./app.component.css']

  
})
export class MainComponent {
	userName : any;
	passWord : any;

		constructor(private app: appService , private router: Router) {}


 logIn(){
 	this.app.changeUser(this.userName);
 	this.app.logIn(this.userName,this.passWord).subscribe(
 		data => {if (data === 'ok'){
 		this.router.navigate(['/profile']);
 	}else if (data === 'admin'){ 
 	this.router.navigate(['/admin']);

 	}else{

 		alert(data)
 	}

 	}

 	)
 }

  
}