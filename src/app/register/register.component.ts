import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  peopleForm: NgForm;
  @ViewChild('peopleForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;
  people: object = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  
  }
  
  
  saveUser(id){
      this.userService.addPeople("user", this.people)
          .subscribe(
            error =>  this.errorMessage = <any>error);
    

    this.people = {};
    this.peopleForm.reset();

  }


  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.peopleForm = this.currentForm;
    this.peopleForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.peopleForm.form;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }


  
  formErrors = {
   "firstName" : "",
  "lastName" : "",
  "userName" : "",
  "password" : "",
  "email" : ""
  };

  validationMessages = {
      'firstName': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 2 characters long.',
      'maxlength': 'First name cannot be more than 30 characters long.'
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 2 characters long.',
      'maxlength': 'Last name cannot be more than 30 characters long.'
    },
    'userName': {
      'required': 'User name is required.',
      'minlength': 'User name must be at least 2 characters long.',
      'maxlength': 'User name cannot be more than 30 characters long.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 2 characters long.',
      'maxlength': 'Password cannot be more than 30 characters long.'
    },
    'email': {
      'required': 'Email is required.',
      'minlength': 'Email must be at least 2 characters long.',
      'maxlength': 'Email cannot be more than 30 characters long.'
    }
  };

}