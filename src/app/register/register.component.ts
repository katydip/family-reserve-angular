
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

  registerForm: NgForm;
  @ViewChild('registerForm') currentForm: NgForm;

  
  successMessage: string;
  errorMessage: string;

  student: object = {};
  major: object;

  ngOnInit(){}

//   getRecordForEdit(){
//     this.route.params
//       .switchMap((params: Params) => this.userService.getRecord("student", +params['id']))
//       .subscribe(student => this.student = student);
//   }

//   constructor(
//     private userService: UserService,
//     private route: ActivatedRoute,
//     private location: Location
//   ) {}

//   ngOnInit() {
//     this.getMajors()
//     this.route.params
//       .subscribe((params: Params) => {
//         (+params['id']) ? this.getRecordForEdit() : null;
//       });
  
//   }

//   saveStudent(id){
//     if(typeof id === "number"){
//       this.userService.editRecord("student", this.student, id)
//           .subscribe(
//             student => this.successMessage = "Record updated succesfully",
//             error =>  this.errorMessage = <any>error);
//     }else{
//       this.userService.addRecord("student", this.student)
//           .subscribe(
//             student => this.successMessage = "Record added succesfully",
//             error =>  this.errorMessage = <any>error);
//     }

//     this.student = {};
//     this.studentForm.reset();
    
//   }
// // i added this... 

// @Input() students;

//   getMajors(){
//     this.userService.getRecords("major")
//     .subscribe(
//         major => {
//           this.major = major;  
//         },
//         error =>  {
//           this.errorMessage = <any>error; 
//           console.log(this.errorMessage)
//         }
//     );
//   }

// compareMajorId(m1, m2){
//     if (m1 != undefined && m2 != undefined) {
//       return m1.major_id === m2.major_id;
//     }
//   }



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

//   formErrors = {
//     'first_name': '',
//     'last_name': '',
//     'sat': '',
//     'start_date': '',
//     'gpa': ''
//   };

//   validationMessages = {
//     'first_name': {
//       'required': 'First name is required.',
//       'minlength': 'First name must be at least 2 characters long.',
//       'maxlength': 'First name cannot be more than 30 characters long.'
//     },
//     'last_name': {
//       'required': 'Last name is required.',
//       'minlength': 'Last name must be at least 2 characters long.',
//       'maxlength': 'Last name cannot be more than 30 characters long.'
//     },
//     'sat': {
//       'pattern': 'SAT score must be between 400 and 1600',
//       'maxlength': 'SAT cannot be more than 4 characters long.'
//     },
//     'start_date': {
//       'pattern': 'Start date should be in the following format: YYYY-MM-DD'
//     },
//     'gpa': {
//       'pattern': 'GPA must be a decimal'
//     }
//   };

}
