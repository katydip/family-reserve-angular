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


  markers: any[] = []

  markerName: string;
  markerAddress: string;
  markerLat: string;
  markerLng: string;

  constructor(private userService: UserService, public dialog: MdDialog) { }


  // ngOnInit(){}

  ngOnInit() {
    localStorage.setItem('currentFamilyID', '10')
    localStorage.setItem('members', JSON.stringify(
      [
        {
          "id": 1,
        }
      ]
    ))
    this.getAddresses();
  }

  getAddresses() {
    let currentFamilyID = JSON.parse(localStorage.getItem('currentFamilyID'))
    this.userService.getRecords(`family/${currentFamilyID}/members/`)
      .subscribe(
        familyMembers => {
          this.familyMembers = familyMembers
          for (let i = 0; i < this.familyMembers.length; i++) {
             this.userService.getRecord('address/person', this.familyMembers[i].id)
              .subscribe(
                address => {
                  for(let i=0; i < address.length; i++){

                    let personName = (address[i].person.firstName + " " +  address[i].person.lastName)
  
                    this.markers.push({ 
                      name: personName, 
                      lat: address[i].latitude, 
                      lng: address[i].longitude,
                      streetAddress: address[i].streetAddress,
                      city: address[i].city,
                      state: address[i].state,
                      zip: address[i].zip
                    })
                  }
                  
                },
                error => console.log("we had an oops")
              )
          }
        },
        error => this.errorMessage = <any>error
      );
  }

}

