import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    animations: [fadeInAnimation],

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
