import { SearchModelGnss } from '../searchmodelgnss';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-map-input-form',
  templateUrl: './map-input-form.component.html',
  styleUrls: ['./map-input-form.component.css']
})

export class MapInputFormComponent implements OnInit {

  @Input() model;
  @Output() modelChanged: EventEmitter<any> = new EventEmitter();

  submitted = false;

  constructor() {}

  ngOnInit() {
  }

  sendChange() {
    this.modelChanged.emit(this.model);
  }



}
