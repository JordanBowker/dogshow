export class Stall {
    title: string;
    link : string;
  
    constructor(title: string, link: string = null) {
        this.title = title;
        this.link = link;
    }
  }
  
  export const STALLS = [
    new Stall('Guide Dogs For The Blind', 'https://www.guidedogs.org.uk/'),
    new Stall('Animals Asia', 'https://www.animalsasia.org/'),
    new Stall('Stefs Pet Pantry', 'https://www.stefspetpantry.com/'),
    new Stall('The Dog Physio', 'http://thedogphysio.co.uk/'),
    new Stall('The Fairy Dog Mother', 'https://fairydogmother.co.uk/'),
    new Stall('Kozi Dog', 'https://www.facebook.com/Kozi-Dog-1826848060895568/'),
    new Stall('Friends of Baxter', 'https://www.friendsofbaxter.org.uk/'),
    new Stall('Linbee Dog Rehoming', 'http://www.linbee.co.uk/'),
    new Stall('Miss Mollies Dog Rescue', 'http://www.missmolliesrescue.org.uk/'),
    new Stall('Holly House Vets', 'https://www.hollyhousevets.co.uk/'),
    new Stall('Joy of Cake', 'https://www.facebook.com/wharfedalecakes/'),
    new Stall('Springbank Dog Collars'),   
  ];
  
  