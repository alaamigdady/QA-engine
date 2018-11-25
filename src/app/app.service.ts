import { Injectable ,Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders ,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router'
import { Response } from '@angular/http'

import 'rxjs/add/operator/map';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class appService {
   
   private userSource = new BehaviorSubject<string>('default')
   currentUser = this.userSource.asObservable()  


   constructor(private http:HttpClient ) {}

   
   logIn(user,password){
   return this.http.get('/users/'+user+'/'+password,{responseType: 'text' })
  
   }

   signUp(params) {
     return this.http.post('/users',params,{responseType: 'text' });
   
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
   console.log(params,'sssssss')
    return this.http.post('/questions/ask',params)
   }

   changeUser(user:string){
   this.userSource.next(user)
   }

   
}