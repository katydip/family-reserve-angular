import 'rxjs/add/operator/switchMap';
import { Component, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animations/fade-in.animations';


import { UserService } from '../user.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
    animations: [fadeInAnimation],


})
export class SigninComponent {


  userForm: NgForm;
  @ViewChild('userForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;
  user: object = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  
  

  login(user){
    console.log(user.value)
      this.userService.getlogin("session/new", user.value)
          .subscribe(
            user => {
              this.user = user
              console.log(user)
              localStorage.setItem('currentUser', JSON.stringify(this.user))
              //to pull up on other page
              //this.user = JSON.parse(localStorage.getItem('currentUser))
              this.router.navigate(['/home'])
             
            },
            error =>  this.errorMessage = <any>error
          )


    // this.user = {};
    // this.userForm.reset();

  }




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

  // localStorage.setItem('user', 'asdflsadlfjk')
  // localStorage.getItem('user')
  // localStorage.removeItem('user')
  
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