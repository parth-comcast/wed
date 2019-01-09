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
        'description': 'I am a person Who is positive about every aspect of my life .I like to sleep early and to get up late. I think 5 years down the life I should be happily settled with my kids and a lovely soul mate with all the blessings of God.I have a Very special bond with My wife 😘...',
        "image": '../assets/p1.jpg',
        'name': '~ Parth'
      },
      {
      'title': 'About the bride',
      'description': 'I am soft spoken, God fearing, caring, talented, understanding, trustworthy and kind hearted human being. I believe in the motto \'LIVE AND LET LIVE\'.I like to see the moon light at night with my lovely hubby.. 😘❤...',
      "image": '../assets/s2.jpg',
      'name': '~ Smita'
      }
    ];
  }

  public ngAfterViewInit(): void {
    console.log("Hi....");
  }
}
