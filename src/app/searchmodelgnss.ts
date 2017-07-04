export class SearchModelGnss {

  constructor(
    public date: string,
    public time: string,
    public lat: string,
    public lng: string
  ) { }

  getPosition() {
    return {lat: Number(this.lat), lng: Number(this.lng) };
  }

  getPositionString() {
    return this.lat + ', ' + this.lng;
  }

}
