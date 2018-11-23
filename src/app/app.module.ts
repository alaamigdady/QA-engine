import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { appService } from './app.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { SignComponent } from './sign.component';
import { ProfileComponent } from './profile.component';




const appRoutes: Routes = [
   {path: '', component: MainComponent,
   path: 'signUp', component: SignComponent,
   path: 'profile', component: ProfileComponent,

 }
 
];

@NgModule({
  declarations: [
    MainComponent,AppComponent,SignComponent,ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [appService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
