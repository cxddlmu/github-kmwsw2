import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainModule } from './main/main.module'
import { FileUploadModule } from './file-upload/file-upload.module'
const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: 'fileUpload',
    loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
