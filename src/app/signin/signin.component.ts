import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

// import { DataService } from '../data.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']

})
export class SigninComponent implements OnInit {

  signinForm: NgForm;
  currentForm: NgForm;
  errorMessage: string;


  constructor(
    // private dataService: DataService,
    // private route: ActivatedRoute,
    // private location: Location
  ) {}

  ngOnInit() {
  
  }
  
  

//   saveStudent(id){
//       this.dataService.addRecord("student", this.student)
//           .subscribe(
//             student => this.successMessage = "Record added succesfully",
//             error =>  this.errorMessage = <any>error);
//     }

//     this.student = {};
//     this.studentForm.reset();


//   ngAfterViewChecked() {
//     this.formChanged();
//   }

//   formChanged() {
//     this.studentForm = this.currentForm;
//     this.studentForm.valueChanges
//       .subscribe(
//         data => this.onValueChanged(data)
//       );
//   }

//   onValueChanged(data?: any) {
//     let form = this.studentForm.form;

//     for (let field in this.formErrors) {
//       // clear previous error message (if any)
//       this.formErrors[field] = '';
//       const control = form.get(field);

//       if (control && control.dirty && !control.valid) {
//         const messages = this.validationMessages[field];
//         for (const key in control.errors) {
//           this.formErrors[field] += messages[key] + ' ';
//         }
//       }
//     }
//   }
// }

  
  formErrors = {
    "id": "",
    "firstName": "",
    "lastName": "",
    "userName": "",
    "password": "",
    "email": "",
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
      'pattern': 'SAT score must be between 400 and 1600',
      'maxlength': 'SAT cannot be more than 4 characters long.'
    },
    'password': {
      'pattern': 'Start date should be in the following format: YYYY-MM-DD'
    },
    'email': {
      'pattern': 'GPA must be a decimal'
    }
  };

}