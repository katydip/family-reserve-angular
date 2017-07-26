import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in.animations';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
import _ from 'lodash'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  families: any[];
  user = JSON.parse(localStorage.getItem("currentUser"))
 
  constructor ( 
    private userService: UserService,
    private router: Router) {}
 
  ngOnInit() { this.getFamily(); }

  getFamily() {
    this.userService.getRecords("family")
      .subscribe(
        families => this.families = families,
        error =>  this.errorMessage = <any>error);
      }
  }



 

 