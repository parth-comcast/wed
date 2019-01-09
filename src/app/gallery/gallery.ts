import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class GalleryComponent {
  public imageSources = [ '../assets/IMG_9808.jpg', '../assets/IMG_9897.jpg'];
}
