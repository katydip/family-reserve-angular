import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { MdDialog, MdDialogRef } from '@angular/material';

import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  user = JSON.parse(localStorage.getItem('currentUser'))
 
  constructor (
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router
      ) {}
 
  ngOnInit() {
    console.log(this.user);
}
 
  // getPerson() {
  //   this.userService.getRecords("people")
  //     .subscribe(
  //       person => {
          
  //       },
  //       error =>  {
  //         this.errorMessage = <any>error
  //       });
  // }

}
