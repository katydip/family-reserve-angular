import { Component, OnInit } from '@angular/core';
import { FlickrService } from './flickr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Family Reserve Site in Progress';
  lat: number = 51.678418;
  lng: number = 7.809007;

  // photo;

  // constructor(private FlickrService: FlickrService){}

}

  


//   getPhotos(){
//     this.FlickrService.getRecords("photo")
//     //wait for Observable to be done then will do something
//     .subscribe(
//       //if {} can place more than one function call.  if no {} can only call one function
//       photo => 
//       {this.photo = photo; 
//       console.log(this.photo[0])
//       }
//     )

// }


