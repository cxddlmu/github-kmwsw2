import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';

import { InterceptorComponent } from './interceptor/interceptor.component';
import { SimplebarAngularModule } from 'simplebar-angular';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    CommonModule, NgZorroAntdModule,SimplebarAngularModule
  ],
  declarations: [SharedComponent,InterceptorComponent,ErrorHandlerComponent], 
  exports: [NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],

})
export class SharedModule { } 