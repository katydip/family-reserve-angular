import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import {} from '@types/googlemaps'; 
import { Http } from '@angular/http';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  zoom: number = 4;
  lat: number = 41.993829;
  lng: number = -91.646382;

  markers: marker[] = [
    {
    name: 'kid home',
    lat: 41.9938947,
    lng: -91.64646759999999
    },
    {
    name: 'Stephanie Loupee',
    lat: 43.156011,
    lng: -71.064497
    },
    {
    name: 'viewportA',
    lat: 41.9952436302915,
    lng: -91.64511856970849
    },
    {
    name: 'viewportB',
    lat: 41.9925456697085,
    lng: -91.64781653029151
    }
  ]

  markerName: string;
  markerAddress: string;
  markerLat: string;
  markerLng: string;


  constructor(){


  }
  
  // constructor(private http: Http) { }
  // getlatlng(address){
  //   return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address)
  //     .catch(handleError);
  // }

  ngOnInit(){}

  // ngOnInit() { this.getAddresses(); }
 
  // getAddresses() {
  //   this.dataService.getRecords("address")
  //     .subscribe(
  //       address => this.address = address,
  //       error =>  this.errorMessage = <any>error);  
  // }
  
 

  addMarker() {
    console.log('Adding Marker');
    
    let newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng)
      
    }
  }
}
 interface marker {
    name: string;
    lat: number;
    lng: number
  }
