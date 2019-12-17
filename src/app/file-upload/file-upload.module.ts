import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module'

const routes: Routes = [

  {
    path: '',
    component:FileUploadComponent
  },
  
];
@NgModule({
  imports: [
     CommonModule,RouterModule.forChild(routes),SharedModule
  ],
  declarations: [FileUploadComponent]
})
export class FileUploadModule { }