import { Component, OnInit } from '@angular/core';
import { FlickrService } from './flickr.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [FlickrService]

})

export class AppComponent implements OnInit {
  title = 'Family Reserve Site in Progress';
  lat: number = 51.678418;
  lng: number = 7.809007;

  searchControl = new FormControl();
  searchStr:string="";

  model$: Observable<any>;
  photos: Object;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {

}

  // ngOnInit() {
  //   this.searchControl.valueChanges
  //     .debounceTime(500)
  //     .distinctUntilChanged()
  //     .switchMap((query: string) => this._flickrService.getResult(query))
  //     .subscribe(value => {
  //       this.photos = value;
  //     });
  // }
  // attempt to change from query to user_id
    ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((user_id) => this._flickrService.getPhotoSet())
      .subscribe(value => {
        this.photos = value;
      });
  }

}

