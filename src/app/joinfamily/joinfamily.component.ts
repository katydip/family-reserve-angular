import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
import _ from 'lodash'

@Component({
  selector: 'app-joinfamily',
  templateUrl: './joinfamily.component.html',
  styleUrls: ['./joinfamily.component.css']
})
export class JoinfamilyComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  families: any[];
  user = JSON.parse(localStorage.getItem("currentUser"))
  postobject: object = {};

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() { this.getFamily(); }

//  update this route to the new one Elizabeth added
  getFamily() {
    this.userService.getRecords(`familiesJoinable/${this.user.id}`)
      .subscribe(
      families => this.families = families,
      error => this.errorMessage = <any>error);
  }

  clickFamily(familyID) {
    console.log(familyID)
    this.userService.putFamily(`family/${familyID}/addMember`, this.user, this.user.id)
      .subscribe(
        user => {
          this.successMessage = "Request to join successful"
          localStorage.setItem('currentUser', JSON.stringify(this.user))

          // input.value.family = { id: `${familyID}` }
          // postobject.value.postedBy = { id: this.user.id }
          this.userService.addPost("post", "Joined the Family", familyID, this.user.id)
            .subscribe(
              () => {
                this.successMessage = "Record added succesfully"
              },
              error => this.errorMessage = <any>error
              // function(error){ this.errorMessage = <any>error }
            );
          this.router.navigate(['/home'])
        },
      error => this.errorMessage = <any>error,
    )

  }


}