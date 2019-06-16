import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IMAGES } from './image-manager';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private _defaultImageNumber =3;
  images = IMAGES;

  @ViewChild('card') cardElement: ElementRef;

  constructor() { }

  ngOnInit() {
    this.changeMainImage(this._defaultImageNumber, false);
  }

   changeMainImage(imageNumber: number, autoScroll = true) {
    this.images.forEach(x=>x.show=false);
    this.images.find(x => x.imageNumber === imageNumber).show = true;
    
    if(this.cardElement && autoScroll === true){
      this.cardElement.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  scrollImages(number : number){
    let currentImage = this.images.find(x => x.show === true);
    let nextImage = this.images.find(x => (currentImage.imageNumber + number)  === x.imageNumber);

    if(nextImage){
      currentImage.show = false;
      nextImage.show = true;
    }


  }
}
