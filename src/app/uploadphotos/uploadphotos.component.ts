
import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

 
const URL = 'https://up.flickr.com/services/upload/';
 
@Component({
  selector: 'app-uploadphotos',
  templateUrl: './uploadphotos.component.html',
  styleUrls: ['./uploadphotos.component.css']
})
export class UploadphotosComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  // public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  // public fileOverAnother(e:any):void {
  //   this.hasAnotherDropZoneOver = e;
  // }
  ngOnInit() {
  }

}
