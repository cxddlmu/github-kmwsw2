import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainModule} from './main/main.module'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpClientJsonpModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, ScrollingModule, DragDropModule,
    AppRoutingModule
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
