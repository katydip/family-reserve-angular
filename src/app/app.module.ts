import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { GeocodingComponent } from './geocoding/geocoding.component';
// import { FlickrComponent } from './flickr/flickr.component';

// import { FlickrService } from './flickr.service';



@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    GeocodingComponent,
    // FlickrComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbSfE0t3tuzdiOtarHlBrkgHNMjeOQGEY'
    })
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
