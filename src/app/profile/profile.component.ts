import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'

import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  mode = 'Observable';
  user = JSON.parse(localStorage.getItem('currentUser'))

  addressEntries: any[] = []
 
  constructor (
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router,
      public dialog: MdDialog
      ) {}
 
  ngOnInit() {
    console.log(this.user);
    { this.getAddresses(); }
    
  }

  getAddresses() {
      this.userService.getRecord('address/person', this.user.id)
        .subscribe(
          addressEntries => this.addressEntries = addressEntries,
          error =>  this.errorMessage = <any>error);

    }          
  
  

  deleteAddress(id:number) {

    let dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userService.deleteRecord("address", id)
          .subscribe(
            address => {this.successMessage = "Record(s) deleted succesfully"; this.getAddresses(); },
            error =>  this.errorMessage = <any>error);
      }
    });
  }
 
}

