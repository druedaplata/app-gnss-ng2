import { SearchModelGnss } from '../searchmodelgnss';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map;
  public markerPos;
  public model = new SearchModelGnss('', '', '', '');

  constructor() { }

  ngOnInit() {
  }

  onMapReady(event) {
    this.map = event;
    console.log(this.map);
  }

  onMapClick(event) {
    this.model = new SearchModelGnss('', '', event.latLng.lat(), event.latLng.lng());
    this.markerPos = this.model.getPosition();
    this.map.panTo(this.markerPos);
    // todo: add changes for date and time
  }

  getModel(newModel) {
    this.model = newModel;
    this.markerPos = newModel.getPosition();
    this.map.panTo(this.markerPos);
  }

}
