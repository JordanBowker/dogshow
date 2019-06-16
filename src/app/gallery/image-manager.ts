export class ImageManager{
    imageNumber :number;
    show: boolean;
  
    constructor(imageNumber : number) {
      this.imageNumber = imageNumber;
      this.show = false;
    }  
  }

export const IMAGES = [
    new ImageManager(3),
    new ImageManager(4),
    new ImageManager(5),
    new ImageManager(6),
    new ImageManager(7),
    new ImageManager(8),
    new ImageManager(9),
    new ImageManager(10),
    new ImageManager(11),
    new ImageManager(12),
    new ImageManager(13),
    new ImageManager(14),
    new ImageManager(15),
    new ImageManager(16),
    new ImageManager(17),
    new ImageManager(18),
    new ImageManager(19),
    new ImageManager(20),
    new ImageManager(21),
    new ImageManager(22),
    new ImageManager(23),
    new ImageManager(24),
    new ImageManager(25),
    new ImageManager(26)
];