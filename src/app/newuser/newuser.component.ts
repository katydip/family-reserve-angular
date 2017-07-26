import 'rxjs/add/operator/switchMap';
import { Component, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';


import { UserService } from '../user.service'

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']

})
export class NewuserComponent{

  public peopleForm: FormGroup;
  public firstName:AbstractControl;
  public lastName:AbstractControl;
  public userName:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  @ViewChild('peopleForm') currentForm: FormGroup;

  successMessage: string;
  errorMessage: string;
  people: object = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    fb:FormBuilder
    ) {

    

    this.peopleForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(6)])],

      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],

      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.firstName = this.peopleForm.controls['firstName'];
    this.lastName = this.peopleForm.controls['lastName'];
    this.userName = this.peopleForm.controls['userName'];

    this.email = this.peopleForm.controls['email'];
    this.passwords = <FormGroup> this.peopleForm.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

    public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.peopleForm.valid) {
      // your code goes here
      // console.log(values);
    }
  }
  
  
  saveUser(id){
      this.userService.addPeople("user", this.people)
          .subscribe();
    

    this.people = {};
    this.peopleForm.reset();

  }


  // ngAfterViewChecked() {
  //   this.formChanged();
  // }

  // formChanged() {
  //   this.peopleForm = this.currentForm;
  //   this.peopleForm.valueChanges
  //     .subscribe(
  //       data => this.onValueChanged(data)
  //     );
  // }

  // onValueChanged(data?: any) {
  //   let form = this.peopleForm.form;

  //   for (let field in this.formErrors) {
  //     // clear previous error message (if any)
  //     this.formErrors[field] = '';
  //     const control = form.get(field);

  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }


  
  // formErrors = {
  //  "firstName" : "",
  // "lastName" : "",
  // "userName" : "",
  // "password" : "",
  // "email" : ""
  // };

  // validationMessages = {
  //     'firstName': {
  //     'required': 'First name is required.',
  //     'minlength': 'First name must be at least 2 characters long.',
  //     'maxlength': 'First name cannot be more than 30 characters long.'
  //   },
  //   'lastName': {
  //     'required': 'Last name is required.',
  //     'minlength': 'Last name must be at least 2 characters long.',
  //     'maxlength': 'Last name cannot be more than 30 characters long.'
  //   },
  //   'userName': {
  //     'required': 'User name is required.',
  //     'minlength': 'User name must be at least 2 characters long.',
  //     'maxlength': 'User name cannot be more than 30 characters long.'
  //   },
  //   'password': {
  //     'required': 'Password is required.',
  //     'minlength': 'Password must be at least 2 characters long.',
  //     'maxlength': 'Password cannot be more than 30 characters long.'
  //   },
  //   'email': {
  //     'required': 'Email is required.',
  //     'minlength': 'Email must be at least 2 characters long.',
  //     'maxlength': 'Email cannot be more than 30 characters long.'
  //   }
  // };

}