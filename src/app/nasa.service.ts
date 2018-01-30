import { Injectable } from '@angular/core';
import  {HttpClient , HttpResponse  } from "@angular/common/http";
import {Apodresponse} from "./apodresponse";
import  {Neows} from "./neows";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Injectable()
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=07883GRXRnhNYz4CDt6xsUNadlL9p0KHepEC0BnR' ;
  private neowsUrl = "https://api.nasa.gov/neo/rest/v1/feed?api_key=07883GRXRnhNYz4CDt6xsUNadlL9p0KHepEC0BnR"




  constructor(private http:HttpClient) { }

  getApodData() {
    return this.http.get<Apodresponse>(this.apiUrl)

  } ;

  // getNeowsData():Observable<Neows>{
  //   return this.http.get<Neows>(this.neowsUrl)
  // }



}
