import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from "angular2-image-upload";
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule } from './routing/routing.module';
import 'hammerjs';

// import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
// import {MenuItem} from 'primeng/primeng';
import { RegisterComponent } from './register/register.component';            //api



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    HomeComponent,
    PhotosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    MaterialModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbSfE0t3tuzdiOtarHlBrkgHNMjeOQGEY'
    }),
    ImageUploadModule.forRoot()

  ],
  providers: [ UserService ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
