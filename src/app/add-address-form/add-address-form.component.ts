import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }


  addAddress(form: NgForm){
    console.log(form.value)
    form.value.person = { id: this.user.id }
    console.log(form.value)
    this.userService.addAddress(`address/`, form.value)
        .subscribe(
          address => this.successMessage = "Record added succesfully",
          error =>  this.errorMessage = <any>error);
    }
}



  // let currentFamilyID = JSON.parse(localStorage.getItem('currentFamilyID'))
  // this.UserService.getRecords(`family/${currentFamilyID}/members/`)

// saveAssignment(assignment: NgForm){
//     if(typeof assignment.value.assignment_id === "number"){
//       this.dataService.editRecord("assignment", assignment.value, assignment.value.assignment_id)
//           .subscribe(
//             assignment => this.successMessage = "Record updated succesfully",
//             error =>  this.errorMessage = <any>error);
//     }else{
//       this.dataService.addRecord("assignment", assignment.value)
//           .subscribe(
//             assignment => this.successMessage = "Record added succesfully",
//             error =>  this.errorMessage = <any>error);
//             this.assignment = {};
//     }
    


  // ngOnInit() {
  //   this.route.params
  //     .subscribe((params: Params) => {
  //       (+params['id']) ? this.getRecordForEdit() : null;
  //     });
  
  // }

  // saveAddress(id){
  //   if(typeof id === "number"){
  //     this.dataService.editRecord("address", this.address, id)
  //         .subscribe(
  //           address => this.successMessage = "Record updated succesfully",
  //           error =>  this.errorMessage = <any>error);
  //   }else{
  //     this.dataService.addRecord("address", this.student)
  //         .subscribe(
  //           student => this.successMessage = "Record added succesfully",
  //           error =>  this.errorMessage = <any>error);
  //   }

    // this.address = {};
    

