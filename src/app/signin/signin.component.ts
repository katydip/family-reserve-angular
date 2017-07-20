import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']

})
export class SigninComponent implements OnInit {

  userForm: NgForm;
  @ViewChild('userForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;
  person: object = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  
  }
  

  // savePerson(id){
  //     this.userService.addRecord("person", this.person)
  //         .subscribe(
  //           error =>  this.errorMessage = <any>error);
    

  //   this.person = {};
  //   this.userForm.reset();

  // }


  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.userForm = this.currentForm;
    this.userForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.userForm.form;

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
    "userName": "",
    "password": "",
  };

  validationMessages = {
    'userName': {
      'required': 'User name is required.',
      'minlength': 'User name must be at least 2 characters long.',
      'maxlength': 'User name cannot be more than 30 characters long.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 2 characters long.',
      'maxlength': 'Password cannot be more than 30 characters long.'
    }
  };

}