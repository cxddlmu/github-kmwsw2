import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTwoComponent } from './section-two.component';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './changeDetection/changeDetection.component';
import { SharedModule } from '../shared/shared.module';
import { BoxComponent } from './changeDetection/box.omponent';
import { ViewComponent } from './view/view.component';
import { EntryTestComponent } from './view/entry-test.component';
// import { OverlayComponent } from './overlay/overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TesseractComponent } from './tesseract/tesseract.component';
import { FileSaverComponent } from './file-saver/file-saver.component';
import { SimplebarComponent } from './Simplebar/simplebar.component';
// import { OverlayPanelComponent } from './overlay/panel/overlay-panel.component';

const routes: Routes = [

  {
    path: '',
    component: SectionTwoComponent,
    children: [
      { path: 'changeDetection', component: ChangeDetectionComponent },
      { path: 'viewComponent', component: ViewComponent },
      { path: 'tesseract', component: TesseractComponent },
      { path: 'filesaver', component: FileSaverComponent },
       { path: 'simplebar', component: SimplebarComponent },

    ]
  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [SectionTwoComponent,
    ChangeDetectionComponent, BoxComponent,
    ViewComponent, EntryTestComponent,TesseractComponent, FileSaverComponent,SimplebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [EntryTestComponent]
})
export class SectionTwoModule { }
