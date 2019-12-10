import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from './shared/shared.module'
const routes: Routes = [

  {
    path: '',
    component:MainComponent
  },
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes),SharedModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }