import { Component, OnInit } from '@angular/core';
import { STALLS, CHARITIES } from './stall';

@Component({
  selector: 'app-stalls',
  templateUrl: './stalls.component.html',
  styleUrls: ['./stalls.component.scss']
})
export class StallsComponent implements OnInit {

  stalls = STALLS;
  charities = CHARITIES;

  constructor() { }

  ngOnInit() {
  }

}