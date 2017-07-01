import { SearchModelGnss } from '../searchmodelgnss';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public markerPos;
  public model = new SearchModelGnss('', '', '', '');

  constructor() { }

  ngOnInit() {
  }

  onMapClick(event) {
    event.target.panTo(event.latLng);
    this.markerPos = event.latLng;
    this.model = new SearchModelGnss('', '', event.latLng.lat(), event.latLng.lng());
    // todo: add changes for date and time
  }

}
