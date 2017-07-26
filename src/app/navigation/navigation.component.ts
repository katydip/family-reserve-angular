import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    brand: string = "Family Reserve";
    user = JSON.parse(localStorage.getItem("currentUser"));

  constructor() { 
    
  }
            
      logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    ngAfterContentChecked() {
     this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
  }

}
