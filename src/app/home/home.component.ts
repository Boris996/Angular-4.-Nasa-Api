import { Component, OnInit } from '@angular/core';
import {Image} from "../image";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public images = IMAGES ;
  constructor() {
  }

  ngOnInit() {
  }

}

var IMAGES: Image[] = [
  { "title": "National Aeronautics and Space Administration", "url": "../../assets/NasaPictures/nasa1.jpg" },
  { "title": "", "url": "../../assets/NasaPictures/nasa2.jpg" },
  { "title": "", "url": "../../assets/NasaPictures/nasa3.jpg" },
  { "title": "", "url": "../../assets/NasaPictures/nasa4.jpg" },
  { "title": "", "url": "../../assets/NasaPictures/nasa1.jpg" }
];
