import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTwoComponent } from './section-two.component';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './changeDetection/changeDetection.component';
import { SharedModule } from '../shared/shared.module';
import { BoxComponent } from './changeDetection/box.omponent';
import { ViewComponent } from './view/view.component';
import { EntryTestComponent } from './view/entry-test.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayPanelComponent } from './overlay/panel/overlay-panel.component';

const routes: Routes = [

  {
    path: '',
    component: SectionTwoComponent,
    children:[
       { path: 'changeDetection', component: ChangeDetectionComponent },
       { path: 'viewComponent', component: ViewComponent },
       { path: 'overlayComponent', component: OverlayComponent },
       
    ]
  },
  
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,OverlayModule,PortalModule
  ],
  declarations: [SectionTwoComponent, ChangeDetectionComponent,BoxComponent,ViewComponent,EntryTestComponent,
    OverlayComponent,OverlayPanelComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[EntryTestComponent,OverlayPanelComponent]
})
export class SectionTwoModule { }
