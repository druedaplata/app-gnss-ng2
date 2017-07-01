import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NguiMapModule } from '@ngui/map';
import { MapComponent } from './map/map.component';
import { MapInputFormComponent } from './map-input-form/map-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapInputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyC-ajGOO9QlAAlH_pOhywj0q6hdFpkI0Ks'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
