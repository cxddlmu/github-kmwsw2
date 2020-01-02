import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOneComponent } from './section-one.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module'

const routes: Routes = [

  {
    path: '',
    component: SectionOneComponent,
    children:[
      //  { path: 'lozad', component: LozadComponent },
    ]
  },
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,
  ],
  declarations: [SectionOneComponent]
})
export class SectionOneModule { }