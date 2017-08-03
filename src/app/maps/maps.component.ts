import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialog, MdDialogRef } from '@angular/material';


import { AgmCoreModule } from '@agm/core';
import { } from '@types/googlemaps';
import { Http } from '@angular/http';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  zoom: number = 4;
  lat: number = 41.993829;
  lng: number = -91.646382;
  errorMessage: string;
  successMessage: string;
  familyMembers;
  personAddress;
  user = JSON.parse(localStorage.getItem("currentUser"))
  userfamily = JSON.parse(localStorage.getItem("currentFamily"))

  markers: any[] = []

  markerName: string;
  markerAddress: string;
  markerLat: string;
  markerLng: string;

  addressEntries: any[] = []

  addressStreet: string;


  constructor(private userService: UserService, public dialog: MdDialog) { }

  ngOnInit(){
    this.getAddresses();
  }

  getAddresses() {
    console.log("local user: ", this.user)
    console.log("family id: ", this.userfamily.id)
    this.userService.getRecords(`family/${this.userfamily.id}/members/`)
      .subscribe(
        familyMembers => {
          this.familyMembers = familyMembers
          for (let i = 0; i < this.familyMembers.length; i++) {
            this.addressEntries.push({name: this.familyMembers[i].firstName + " " + this.familyMembers[i].lastName, addresses: []})
             this.userService.getRecord('address/person', this.familyMembers[i].id)
              .subscribe(
                address => {
                  
                  for(let n=0; n < address.length; n++){

                    let personName = (address[n].person.firstName + " " +  address[n].person.lastName)
  
                    this.markers.push({ 
                      name: personName, 
                      lat: address[n].latitude, 
                      lng: address[n].longitude,
                      streetAddress: address[n].streetAddress,
                      city: address[n].city,
                      state: address[n].state,
                      zip: address[n].zip
                    })

                    this.addressEntries[i].addresses.push(address[n])


                  }
                  console.log(this.addressEntries)
                },
                error => console.log("we had an oops")
              )
          }
        },
        error => this.errorMessage = <any>error
      );
  }

}

