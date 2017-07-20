import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { FlickrService } from '../flickr.service';
import { AppComponent } from '../app.component';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
      providers: [FlickrService]

})
export class PhotosComponent implements OnInit {

  searchControl = new FormControl();
  searchStr:string="";

  model$: Observable<any>;
  photos: Object;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) { }

    ngOnInit() {
    this._flickrService.getPhotoSet()
      .subscribe(value => {
        this.photos = value;
      });
  }

    likeMe(i) {
    if (this.photos[i].liked == 0)
      this.photos[i].liked = 1;
    else
      this.photos[i].liked = 0;
  }
  }



//not need full flickr
  // ngOnInit() {
  //   this.searchControl.valueChanges
  //     .debounceTime(500)
  //     .distinctUntilChanged()
  //     .switchMap((query: string) => this._flickrService.getResult(query))
  //     .subscribe(value => {
  //       this.photos = value;
  //     });
  // }

// }

  

