import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionThreeComponent } from './section-three.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
const routes: Routes = [

  {
    path: '',
    component: SectionThreeComponent,
  },

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule, OverlayModule, PortalModule

  ],
  declarations: [SectionThreeComponent]
})
export class SectionThreeModule { }
