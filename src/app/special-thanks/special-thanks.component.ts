import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/link';

@Component({
  selector: 'app-special-thanks',
  templateUrl: './special-thanks.component.html',
  styleUrls: ['./special-thanks.component.scss']
})
export class SpecialThanksComponent implements OnInit {

  private _thankYouLinks = [
    new Link('Guide Dogs For The Blind', 'https://www.guidedogs.org.uk/'),
    new Link('Animals Asia', 'https://www.animalsasia.org/'),
    new Link('Stefs Pet Pantry', 'https://www.stefspetpantry.com/'),
    new Link('The Dog Physio', 'http://thedogphysio.co.uk/'),
    new Link('The Fairy Dog Mother', 'https://fairydogmother.co.uk/'),
    new Link('Kozi Dog', 'https://www.facebook.com/Kozi-Dog-1826848060895568/'),
    new Link('Friends of Baxter', 'https://www.friendsofbaxter.org.uk/'),
    new Link('Linbee Dog Rehoming', 'http://www.linbee.co.uk/'),
    new Link('Miss Mollies Dog Rescue', 'http://www.missmolliesrescue.org.uk/'),
    new Link('Holly House Vets', 'https://www.hollyhousevets.co.uk/'),
    new Link('The Joy of Cake', 'https://www.facebook.com/wharfedalecakes/'),
    new Link('Murphy\'s Army', 'http://www.murphysarmy.org/'),
    new Link('Springbank Dog Collars'),
  ];

  thankYouLinks = this._thankYouLinks.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  constructor() { }

  ngOnInit() {
  }

}
