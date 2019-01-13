import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})

export class GalleryComponent implements OnInit{
    public imageSources: string[] = [ '../assets/IMG_9808.jpg', '../assets/IMG_9897.jpg'];
    public imageSlides: string[] = [];

    public ngOnInit(): void {
        for (let i = 1; i < 32; i++) {
            this.imageSlides.push(`../assets/gallery/slide${i}.jpg`);
        }
    }
}
