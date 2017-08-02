import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-relationchart',
  templateUrl: './relationchart.component.html',
  styleUrls: ['./relationchart.component.css']
})

export class RelationchartComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  members: any[];
 
  model$: Observable<any>;

  userfamily = JSON.parse(localStorage.getItem("currentFamily"));
  user = JSON.parse(localStorage.getItem("currentUser"));


  constructor ( 
    private userService: UserService,
    private router: Router) {}
 
  ngOnInit() { 
    this.userfamily
    this.getMembers()


  }
 getMembers() {
    // console.log(`in getmembers ${this.userfamily.id}`)
    let membersEndpoint = `family/${this.userfamily.id}/members`
    this.userService.getRecords(membersEndpoint)
      .subscribe(
        members => this.members = members
      )
  }




}

  


  