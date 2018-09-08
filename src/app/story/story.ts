import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.html',
  styleUrls: ['./story.scss']
})
export class StoryComponent {

  public stories = [
    {
      'title': 'Our First Met',
      'summary': 'THAT DAY CHANGED LIFE',
      'description': 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit',
      "image": '../assets/hand.png',
      'date': '20 DECEMBER 2017'
    },
    {
      'title': 'Our First Met',
      'summary': 'THAT DAY CHANGED LIFE',
      'description': 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit',
      "image": '../assets/birthday.png',
      'date': '20 DECEMBER 2017'
    },
    {
      'title': 'Our First Met',
      'summary': 'THAT DAY CHANGED LIFE',
      'description': 'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit',
      "image": '../assets/heart.png',
      'date': '20 DECEMBER 2017'
    }
  ];
}
