
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm, FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animations';

import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
    animations: [fadeInAnimation],


})
export class RegisterComponent implements OnInit {

  peopleForm: NgForm;
  @ViewChild('peopleForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;
  user: object = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
  
  }
  
  // need to add validation and error messages, currently giving user a 404 for bad password
  // also make password private? and confirm pw?
  saveUser(form: NgForm){

      this.userService.addPeople("person", form.value)
          .subscribe(
            user => {
                localStorage.setItem('currentUser', JSON.stringify(user))
                this.router.navigate(['/home'])
            },
            error =>  this.errorMessage = <any>error
            )
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
    },
    'password': {
      'required': 'Password is required.',
    },
    'email': {
      'required': 'Email is required.',
    }
  };

}
