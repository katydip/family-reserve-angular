import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service'

@Component({
   selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']

})
export class EditprofileComponent implements OnInit {

  profileForm: NgForm;
  @ViewChild('profileForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  user = JSON.parse(localStorage.getItem('currentUser'))

 
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router

  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        // (+params['id']) ? this.user : null;
      });
  
  }

  saveProfile(user){
  console.log(this.user.id)

    // if(typeof id === "number"){
      this.userService.editRecord("person", this.user)
          .subscribe(
            user => {
              this.user = user
              console.log(user)
              this.successMessage = "Record updated succesfully",
              localStorage.setItem('currentUser', JSON.stringify(this.user))
              this.router.navigate(['/profile'])
            },
            error =>  this.errorMessage = <any>error
          )
    
    // }
  }




  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.profileForm = this.currentForm;
    this.profileForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.profileForm.form;

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
    'first_name': '',
    'last_name': '',
    'sat': '',
    'start_date': '',
    'gpa': ''
  };

  validationMessages = {
    'first_name': {
      'required': 'First name is required.',
    },
    'last_name': {
      'required': 'Last name is required.',
    },

}
}
