import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { Router, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-add-address-form',
  templateUrl: './add-address-form.component.html',
  styleUrls: ['./add-address-form.component.css']
})

export class AddAddressFormComponent implements OnInit {
  addressForm: NgForm;
  personID;
  @ViewChild('addressForm') currentForm: NgForm;
  successMessage: string;
  errorMessage: string;
  personName;
  user = JSON.parse(localStorage.getItem("currentUser"));

  address: object = {};

  constructor(
    private userService: UserService,
    private route: Router,
    private location: Location
  ) {}

  ngOnInit() {
  }


  addAddress(form: NgForm){
    form.value.person = { id: this.user.id }
    // console.log(form.value)
    this.userService.addAddress(`address/`, form.value)
        .subscribe(
          post => {
            this.successMessage = "Record added succesfully",

            // this.userService.addPost("post", "Added a new address", this.userfamily.id, this.user.id)
            //   .subscribe(
            //     () => {this.successMessage = "Record added succesfully"},
            //     error => this.errorMessage = <any>error
            //     );
         
            this.route.navigate(['/profile'])
          },
            error =>  this.errorMessage = <any>error
        );
            
    }
}

