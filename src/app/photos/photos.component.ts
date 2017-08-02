import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { FlickrService } from '../flickr.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

// import { fadeInAnimation } from '../animations/fade-in.animations';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service'
import 'rxjs/Rx';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  // animations: [fadeInAnimation],
  providers: [FlickrService]

})
export class PhotosComponent implements OnInit {
  model$: Observable<any>;
  photos: Object;
  user = JSON.parse(localStorage.getItem("currentUser"));
  userfamily = JSON.parse(localStorage.getItem("currentFamily"));


  constructor(
    private _formBuilder: FormBuilder,
    private _flickrService: FlickrService,
    private userService: UserService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.displayPhotos()
  }

  displayPhotos() {
    this._flickrService.getPhotoSet()
      .subscribe(value => {
        this.photos = value;
      });
  }


  setPhoto(photoURL) {
    // console.log(photoURL)
    this.userService.editRecord("person", 
    { id : this.user.id,
    profilePhotoId : photoURL })
      .subscribe(
    )

  }


}






