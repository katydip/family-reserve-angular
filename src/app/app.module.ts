import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from "angular2-image-upload";
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FileUploadModule } from 'ng2-file-upload';
import 'hammerjs';

// import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
// import {MenuItem} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule } from './routing/routing.module';
import { RegisterComponent } from './register/register.component';        
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';
    

import { UserService } from './user.service';
import { FlickrService } from './flickr.service';
import { AddAddressFormComponent } from './add-address-form/add-address-form.component';

import { NewuserComponent } from './newuser/newuser.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreatefamilyComponent } from './createfamily/createfamily.component';
import { JoinfamilyComponent } from './joinfamily/joinfamily.component';
import { MyfamilyComponent } from './myfamily/myfamily.component';
import { CreateFamilyComponent } from './create-family/create-family.component';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NavigationComponent,
    SigninComponent,
    HomeComponent,
    PhotosComponent,
    RegisterComponent,
    AddAddressFormComponent,
    UploadphotosComponent,
    NewuserComponent,
    ProfileComponent,
    EditprofileComponent,
    CreatefamilyComponent,
    JoinfamilyComponent,
    MyfamilyComponent,
    CreateFamilyComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    MaterialModule, 
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbSfE0t3tuzdiOtarHlBrkgHNMjeOQGEY'
    }),
    ImageUploadModule.forRoot(),
    FlexLayoutModule,
    FileUploadModule

  ],
  providers: [ UserService, FlickrService ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
