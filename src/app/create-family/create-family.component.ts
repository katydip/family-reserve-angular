import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {

  familyForm: NgForm;
  @ViewChild('familyForm') currentForm: NgForm;
  successMessage: string;
  errorMessage: string;
  user = JSON.parse(localStorage.getItem("currentUser"));

  family: object = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit() {

  }

  addFamily(form: NgForm){
    console.log(form.value)
    this.userService.addRecord(`family/`, form.value)
        .subscribe(
          address => this.successMessage = "Record added succesfully",
          error =>  this.errorMessage = <any>error);
    }
}

