import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm, FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import { UserService } from '../user.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']


})
export class RecipesComponent implements OnInit {

  recipeForm: NgForm;
  @ViewChild('recipeForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  user = JSON.parse(localStorage.getItem('currentUser'));
  userfamily = JSON.parse(localStorage.getItem("currentFamily"));


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
  
  }
  
  saveRecipe(recipeForm: NgForm){
      recipeForm.value.family = { id: this.userfamily.id }
      recipeForm.value.postedBy = { id: this.user.id }
      this.userService.addPeople("recipe", recipeForm.value)
          .subscribe(
        post => { 
          this.successMessage = "Record added succesfully"
          this.router.navigate(['/viewrecipes'])

             this.userService.addPost("post", "Shared a new recipe!", this.userfamily.id, this.user.id)
            .subscribe(
              () => {this.successMessage = "Record added succesfully"},
              error => this.errorMessage = "Something went wrong, please try again"
              // function(error){ this.errorMessage = <any>error }
            );
        },
        error => this.errorMessage = "Something went wrong, please try again"
      );

  }


  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.recipeForm = this.currentForm;
    this.recipeForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.recipeForm.form;

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
  "title" : "",
  "cookTime" : "",
  "directions" : "",
  "ingredients" : "",
  "preps" : "",
  "serves" : ""
  };

  validationMessages = {
      'title': {
      'required': 'Title is required.',
      // 'minlength': 'First name must be at least 2 characters long.',
      // 'maxlength': 'First name cannot be more than 30 characters long.'
    },
    // 'cookTime': {
    //   'required': 'Cook time is required.',
    // },
    'directions': {
      'required': 'Directions required.',
    },
    'ingredients': {
      'required': 'Ingredients required.',
    }
    // 'preps': {
    //   'required': 'Preparation required.',
    // },
    // 'serves': {
    //   'required': 'Serving amount required.',
    // }
  };

}
