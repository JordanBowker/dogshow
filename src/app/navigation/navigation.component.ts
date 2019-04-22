import { Component, OnInit , AfterViewInit} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    jQuery('.menu-dropdown-trigger').dropdown();
  }
}
