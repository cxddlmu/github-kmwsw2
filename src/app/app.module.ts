import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpClientJsonpModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ScrollingModule,
      DragDropModule,
      AppRoutingModule,
      SharedModule,BrowserTransferStateModule,SimplebarAngularModule
   ],
   exports: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
