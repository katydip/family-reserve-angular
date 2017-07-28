import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


// import _ from 'lodash'
// import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-viewrecipes',
  templateUrl: './viewrecipes.component.html',
  styleUrls: ['./viewrecipes.component.css']

})
export class ViewrecipesComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  recipeArray: any[];
  model$: Observable<any>;

  userfamily = JSON.parse(localStorage.getItem("currentFamily"));
  user = JSON.parse(localStorage.getItem("currentUser"));


  constructor ( 
    private userService: UserService,
    private router: Router) {}
 
  ngOnInit() { 
    this.userfamily
    this.getRecipes()
   
  }


getRecipes() {
    this.userService.getRecords("recipes")
      .subscribe(
        recipeArray => this.recipeArray = recipeArray
      )
  }
 





}

  


  