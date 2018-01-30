import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Routes , RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination' ;
import {CommonModule} from "@angular/common";
import {NgDatepickerModule} from 'ng2-datepicker' ;

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApodComponent } from './apod/apod.component';
import { NeowsComponent } from './neows/neows.component';
import { PlanetsubmitComponent } from './planetsubmit/planetsubmit.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {TranslateModule , TranslateLoader} from '@ngx-translate/core'
import {HttpClient} from "@angular/common/http";
import { ColorPipe } from './color.pipe';


const appRoutes:Routes = [
  {path:'home/apod' , component:ApodComponent},
  {path:'home/neows',component:NeowsComponent},
  {path:'home/submitplanet', component:PlanetsubmitComponent},
  {path:'home',component:HomeComponent},
  {path: '' ,redirectTo:'/home', pathMatch:'full'},
  {path: '**',component:AppComponent}
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApodComponent,
    NeowsComponent,
    PlanetsubmitComponent,
    ColorPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgDatepickerModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
