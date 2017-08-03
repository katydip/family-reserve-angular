import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FlickrService } from '../flickr.service';
import { PhotosComponent } from '../photos/photos.component';
import { ViewrecipesComponent } from '../viewrecipes/viewrecipes.component';

import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-myfamily',
  templateUrl: './myfamily.component.html',
  styleUrls: ['./myfamily.component.css'],
  providers: [FlickrService]

})
export class MyfamilyComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  families: any[];
  members: any[];
  postcontent: any[];
  model$: Observable<any>;
  photos: Object;
  relatives: Object;
  albums: any[];



  userfamily = JSON.parse(localStorage.getItem("currentFamily"));
  user = JSON.parse(localStorage.getItem("currentUser"));


  constructor(
    private userService: UserService,
    private router: Router,
    private _flickrService: FlickrService) { }

  ngOnInit() {
    this.userfamily
    this.getMembers()
    // console.log(this.userfamily)
    this.getPosts()
    setInterval(() => { this.getPosts() }, 10000)
    this.displayPhotos()

  }

  getMembers() {
    // console.log(`in getmembers ${this.userfamily.id}`)
    let membersEndpoint = `family/${this.userfamily.id}/members`
    this.userService.getRecords(membersEndpoint)
      .subscribe(
      members => this.members = members
      )
  }
  getRelation() {
    this.userService.getRecords("relationType")
      .subscribe(
      relatives => this.relatives = relatives
      )
  }

  getPosts() {
    let postEndpoint = "post/family"
    this.userService.getRecord(postEndpoint, this.userfamily.id)
      .subscribe(
      postcontent => this.postcontent = postcontent,
      error => this.errorMessage = <any>error
      )
  }

  displayPhotos() {
    this._flickrService.getPhotoSet()
      .subscribe(value => {
        this.photos = value;
      });
  }
  
  getAlbumlist() {
    this._flickrService.getAlbums()
      .subscribe(value => {
        this.albums = value;
        // console.log(this.albums)
      });
  }

  createPost(input: NgForm) {
    input.value.family = { id: this.userfamily.id }
    input.value.postedBy = { id: this.user.id }
    this.userService.addAddress("post", input.value)
      .subscribe(
      post => {
        this.successMessage = "Record added succesfully"
        this.getPosts()
      },
      error => this.errorMessage = <any>error
      );
  }

  setAlbum(photoSetId) {
    // console.log(photoURL)
    this.userService.editRecord("family",
      {
        id: this.userfamily.id,
        photoSetId: this.userfamily["photoSetId"] = photoSetId
      })
      .subscribe(
        () => this.displayPhotos()
      )

  }



}




