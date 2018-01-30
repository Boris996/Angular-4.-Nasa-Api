import { Component, OnInit } from '@angular/core';
import {NasaService} from "../nasa.service";


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
  providers: [NasaService],
})
export class ApodComponent implements OnInit {
  data:any = {} ;

  constructor(private service:NasaService) { }

  ngOnInit() {
    this.service.getApodData().subscribe(data => {
        this.data = data
      },
      err => { console.log("Error Occurred")}
      )
  }

}
