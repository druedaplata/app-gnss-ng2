import { SearchModelGnss } from '../searchmodelgnss';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public sv = new google.maps.StreetViewService();
  public map;
  public markerPos;
  public isValid = false;
  public model = new SearchModelGnss('', '', '', '');

  constructor() {
  }

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
    this.isValid = true;
    // todo: add changes for date and time
  }

  public search(event, item) {
    const myLatLng = new google.maps.LatLng(Number(this.model.lat), Number(this.model.lng));
    this.sv.getPanorama({location: myLatLng, radius: 50}, this.processPanorama);
    console.log('searching...');
  }

  public processPanorama(info, status) {
    this.isValid = false;
    // TODO: download tiles AND join them
    // TODO: segment sky from image
    // TODO: create stereo projection
  }

  getModel(newModel) {
    this.model = newModel;
    this.markerPos = newModel.getPosition();
    this.map.panTo(this.markerPos);
  }

}
