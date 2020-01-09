
import { CommonModule } from '@angular/common';
import { SectionOneComponent } from './section-one.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { LozadComponent } from './lozad/lozad.component';
import { PhotoviewerComponent } from './photoviewer/photoviewer.component';
import { EditorJSComponent } from './editor-js/editor-js.component';
import { CleavejsComponent } from './cleavejs/cleavejs.component';
import { CssDoodleComponent } from './css-doodle/css-doodle.component'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HandyScrollComponent } from './handy-scroll/handy-scroll.component';

const routes: Routes = [

  {
    path: '',
    component: SectionOneComponent,
    children:[
       { path: 'lozad', component: LozadComponent },
       { path: 'photoviewer', component: PhotoviewerComponent },
       { path: 'editorJS', component: EditorJSComponent },
       { path: 'cleavejs', component: CleavejsComponent },
       { path: 'cssDoodle', component: CssDoodleComponent },
    ]
  },
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,
  ],
  declarations: [SectionOneComponent, LozadComponent, PhotoviewerComponent, EditorJSComponent, CleavejsComponent, CssDoodleComponent, HandyScrollComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionOneModule { }