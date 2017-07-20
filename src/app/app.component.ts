import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
// import { FlickrService } from './flickr.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    // providers: [FlickrService]

})

export class AppComponent implements OnInit {
  title = 'Family Reserve Site in Progress';
  //Stephanie we can take these lat/lng out when you move them into your maps piece
  // lat: number = 51.678418;
  // lng: number = 7.809007;

    ngOnInit(){

    }
}

