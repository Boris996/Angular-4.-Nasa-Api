import { Component, OnInit  } from '@angular/core';
import {NasaService} from "../nasa.service";
import {DatepickerOptions} from 'ng2-datepicker' ;
import * as frLocale from 'date-fns/locale/fr';
import {ColorPipe} from "../color.pipe";
import {HttpClient} from "@angular/common/http";
import {Neows} from "../neows";

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.css'],
  providers: [NasaService , ColorPipe],
})

export class NeowsComponent implements OnInit {
  private neowsUrl = "https://api.nasa.gov/neo/rest/v1/feed?api_key=07883GRXRnhNYz4CDt6xsUNadlL9p0KHepEC0BnR" ;
  isActive:boolean = true ;
  isDisabled:boolean = false ;
  startDate:string = '';
  endDate:string = '';
  data = {} ;
  near_earth_objects: Array<any>;

  options:DatepickerOptions = {
    minYear:1970,
    maxYear:2030,
    displayFormat: 'YYYY-MM-DD',
    barTitleFormat: 'YYYY-MM-DD',
    firstCalendarDay: 0,
    locale: frLocale
  };


  constructor(private service:NasaService , private http:HttpClient) { }
  ngOnInit() {
  }

  getNeows(){
    this.http.get<Neows>(this.neowsUrl +  '&' + this.startDate + '&' + this.endDate).subscribe(data => {
      this.data = data;
      this.near_earth_objects = new Array();
      for (let date in data.near_earth_objects as any) {
        for (let key in data.near_earth_objects[date]) {
          let ast = data.near_earth_objects[date][key];

          let asteroid = {
            name: ast.name,
            distance: ast.close_approach_data[0].miss_distance.kilometers,
            absolute_magnitude_h: ast.absolute_magnitude_h,
            is_potentially_hazardous: (ast.is_potentially_hazardous_asteroid ? 'Yes' : 'No'),
            diameterMin: ast.estimated_diameter.meters.estimated_diameter_min,
            diameterMax: ast.estimated_diameter.meters.estimated_diameter_max
          }
          this.near_earth_objects.push(asteroid);
        }
      }
    });
  }


  key:string =  name;
  reverse:boolean = false ;
  sort(key){
    this.key = key ;
    this.reverse = !this.reverse;
  }

}
