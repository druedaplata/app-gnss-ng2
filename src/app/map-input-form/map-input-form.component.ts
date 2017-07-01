import { SearchModelGnss } from '../searchmodelgnss';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-map-input-form',
  templateUrl: './map-input-form.component.html',
  styleUrls: ['./map-input-form.component.css']
})

export class MapInputFormComponent implements OnInit {

  @Input() model;

  submitted = false;

  constructor() {}

  ngOnInit() {
  }



}
