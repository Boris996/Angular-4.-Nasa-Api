import { Component , OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements  OnInit{
constructor(private translate:TranslateService) {
  translate.addLangs(['arm','en','ru'])
  translate.setDefaultLang('en') ;
  translate.use('en')

  }

ngOnInit(){
}

translateLang(lang:string){
  this.translate.use(lang)
}

}
