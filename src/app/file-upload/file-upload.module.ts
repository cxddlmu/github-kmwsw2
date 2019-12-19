import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module'
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { LozadComponent } from './lozad/lozad.component';

const routes: Routes = [

  {
    path: '',
    component: FileUploadComponent,
    children:[
       { path: 'lozad', component: LozadComponent },
    ]
  },
  
];
@NgModule({
  imports: [
     CommonModule,RouterModule.forChild(routes),SharedModule,FilePondModule
  ],
  declarations: [FileUploadComponent, LozadComponent]
})
export class FileUploadModule { }