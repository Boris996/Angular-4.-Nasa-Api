import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetsubmit',
  templateUrl: './planetsubmit.component.html',
  styleUrls: ['./planetsubmit.component.css']
})
export class PlanetsubmitComponent implements OnInit {
  form: any;
  galaxies: string[];
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {
    this.galaxies = ['Andromeda', 'Black Eye Galaxy',
      'Bode\'s Galaxy', 'Cartwheel Galaxy' , 'Cigar Galaxy', 'Hoag\'s Object'];

  }


  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }

}
