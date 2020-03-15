import { NgModule, Injectable, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { YoudaoComponent } from './youdao.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateComponent } from './translate/translate.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { DetailPhrsListTabComponent } from './detail-phrs-list-tab/detail-phrs-list-tab.component';
import { DetailWebTransComponent } from './detail-web-trans/detail-web-trans.component';
import { DetailAuthTransComponent } from './detail-auth-trans/detail-auth-trans.component';
import { DetailTransformComponent } from './detail-transform/detail-transform.component';
import { DetailExamplesComponent } from './detail-examples/detail-examples.component';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
// import { LoadingBarModule } from '@ngx-loading-bar/core';
import { environment } from 'src/environments/environment';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';

const routes: Routes = [

  {
    path: '',
    component: YoudaoComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'translate',
        component: TranslateComponent
      }, {
        path: 'search',
        component: SearchComponent
      }, {
        path: 'detail/:word',
        component: DetailComponent
      }]
  },

];
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'https://proxy-oagpwnbkpe.now.sh';

    req = req.clone({
      url: url + req.url
    });

    return next.handle(req);
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
    LoadingBarHttpClientModule,
    // for Core use:
    LoadingBarModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [YoudaoComponent,
    TranslateComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    DetailPhrsListTabComponent,
    DetailWebTransComponent,
    DetailAuthTransComponent,
    DetailTransformComponent,
    DetailExamplesComponent
  ],
  providers: [
    AppComponent,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
})
export class YoudaoModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform: string = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }

}
