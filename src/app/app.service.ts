import { Injectable ,Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router'

import 'rxjs/add/operator/map';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class appService {
   
   private userSource = new BehaviorSubject<string>('default')
   currentUser = this.userSource.asObservable()  


   constructor(private http:HttpClient) {}

   
   logIn(user,password){
   return this.http.get('/users/'+user+'/'+password)
   // .do(res => {
   //      if(res.status === '200' && this.userSource === 'admin') this.router.navigate(['/adminProfile']);
   //      else if (res.status === '200') this.router.navigate(['/profile']);
   //    })
   //    .catch(console.log('error'))
   }

   signUp(params){
   return this.http.post('/users',params)
   // .do(res => {
   //      if(res.status === '200' && this.userSource === 'admin') this.router.navigate(['/adminProfile']);
   //      else if (res.status === '200') this.router.navigate(['/profile']);
   //    })
   //    .catch(console.log('error'))
   }

   getAllAnswers(){
    return this.http.get('/questions/true')
   }

   getAllQuestions(){
    return this.http.get('/questions/false')
   }


   answer(params){
    return this.http.post('/questions/answer',params)
   }

   ask(params){
    return this.http.post('/questions/ask',params)
   }

   changeUser(user:string){
   this.userSource.next(user)
   }

   
}