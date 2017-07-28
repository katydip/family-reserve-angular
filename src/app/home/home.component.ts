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
  families: any[] = [];
  userfamily: object = {};

  user = JSON.parse(localStorage.getItem("currentUser"));
  // userfamily = JSON.parse(localStorage.getItem("currentFamily"));
 
  constructor ( 
    private userService: UserService,
    private router: Router) {}
 
  ngOnInit() { 
    this.getUserFamilies()
    // console.log(this.user)
    // console.log(this.family)
   }

   getFamily() {
    this.userService.getRecords("family")
      .subscribe(
        families => this.families = families,
        error =>  this.errorMessage = <any>error);
      }


  getUserFamilies() {
    this.userService.getRecords(`person/${this.user.id}/families`)
      .subscribe(
        families =>{ this.families = families
          console.log(this.families)
      },
        error =>  this.errorMessage = <any>error);
      }
  

clickFamily(familyID){
    console.log(familyID),
    this.userService.getRecords(`family/${familyID}`)
      .subscribe(
            userfamily => {
              this.userfamily = userfamily
              console.log(userfamily)
              localStorage.setItem('currentFamily', JSON.stringify(this.userfamily))
              this.router.navigate(['/myfamily'])

            },
            error =>  this.errorMessage = <any>error
          )
  };

 }
 


 