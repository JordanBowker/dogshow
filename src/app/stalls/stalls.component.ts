import { Component, OnInit } from '@angular/core';
import { STALLS } from './stall';

@Component({
  selector: 'app-stalls',
  templateUrl: './stalls.component.html',
  styleUrls: ['./stalls.component.scss']
})
export class StallsComponent implements OnInit {

  stalls = STALLS.sort(function(a, b){
    return a.title.localeCompare(b.title);
});

  constructor() { }

  ngOnInit() {
  }

}