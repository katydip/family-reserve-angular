
import { Component, OnInit } from '@angular/core';
import { ViewChild, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in.animations';


import { FileUploader } from 'ng2-file-upload';

 
const URL = 'https://up.flickr.com/services/upload/';
 
@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./uploadphotos.component.css'],
    animations: [fadeInAnimation],

})
export class UploadphotosComponent {

  public uploader:FileUploader = new FileUploader({url: URL, method: "post", additionalParameter: {
    api_key: "bc39f561acb94d42e4f6745fbd8f5258",
    auth_token: "72157687029607965-d4b12694250504c7",
    api_sig: "4c7bc7f6d1572c88a94b82f669d10866"
  }});
  public hasBaseDropZoneOver:boolean = false;
  // public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  // public fileOverAnother(e:any):void {
  //   this.hasAnotherDropZoneOver = e;
  // }


}
