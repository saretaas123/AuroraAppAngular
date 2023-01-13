import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    MatSlideToggleModule,
     BrowserAnimationsModule,
     RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
