import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  public info = [];

  public ngOnInit(): void {
    this.info = [
      {
        'title': 'About the groom',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, vel. Odio, ex ut veritatis reprehenderit in facilis nobis! Ratione eos sint eligendi exercitationem consequatur, distinctio molestias minima, assumenda nulla autem !',
        "image": '../assets/p1.jpg',
        'name': '~ Parth'
      },
      {
      'title': 'About the bride',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, vel. Odio, ex ut veritatis reprehenderit in facilis nobis! Ratione eos sint eligendi exercitationem consequatur, distinctio molestias minima, assumenda nulla autem !',
      "image": '../assets/s2.jpg',
      'name': '~ Smita'
      }
    ];
  }
}
