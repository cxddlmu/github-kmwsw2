import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOneComponent } from './section-one.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { LozadComponent } from './lozad/lozad.component';
import { PhotoviewerComponent } from './photoviewer/photoviewer.component'

const routes: Routes = [

  {
    path: '',
    component: SectionOneComponent,
    children:[
       { path: 'lozad', component: LozadComponent },
       { path: 'photoviewer', component: PhotoviewerComponent },
    ]
  },
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,
  ],
  declarations: [SectionOneComponent, LozadComponent, PhotoviewerComponent]
})
export class SectionOneModule { }