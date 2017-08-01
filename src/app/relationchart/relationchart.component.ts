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
  relatives1: any[];
  // relatives2: any[];
  // relatives3: any[];
  // relatives4: any[];


  model$: Observable<any>;

  userfamily = JSON.parse(localStorage.getItem("currentFamily"));
  user = JSON.parse(localStorage.getItem("currentUser"));


  constructor ( 
    private userService: UserService,
    private router: Router) {}
 
  ngOnInit() { 
    this.userfamily
    this.getRelatives1()
    // this.getRelatives2()
    // this.getRelatives3()
    // this.getRelatives4()


  }

//alter these to get by relationtype
  getRelatives1() {
    let relationEndpoint1 = `family/${this.userfamily.id}/members`
    this.userService.getRecords(relationEndpoint1)
      .subscribe(
        relatives1 => this.relatives1 = relatives1
      )
  }

    getRelatives2() {
    // let relationEndpoint2 = `family/${this.userfamily.id}/members`
    // this.userService.getRecords(relationEndpoint2)
    //   .subscribe(
    //     relatives2 => this.relatives2 = relatives2
    //   )
  }

    getRelatives3() {
    // let relationEndpoint3 = `family/${this.userfamily.id}/members`
    // this.userService.getRecords(relationEndpoint3)
    //   .subscribe(
    //     relatives3 => this.relatives3 = relatives3
    //   )
  }

  getRelatives4() {
    // let relationEndpoint4 = `family/${this.userfamily.id}/members`
    // this.userService.getRecords(relationEndpoint4)
    //   .subscribe(
    //     relatives4 => this.relatives4 = relatives4
    //   )
  }



}

  


  