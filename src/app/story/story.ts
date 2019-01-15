import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.html',
  styleUrls: ['./story.scss']
})
export class StoryComponent {

  public stories = [
    {
      'title': 'How I Proposed',
      'summary': 'THAT DAY CHANGED LIFE',
      'description': 'We use to call every morning before her mom woke up(This is secret talk😉). On that day in the middle of something I suddenly proposed her 😘❤. And She immediately accepted It and made me mad to believe that "she is mine only😘❤"',
      "image": '../assets/stories/propose.jpg',
      'date': '25 AUGUST 2017'
    },
    {
      'title': 'Our First Met',
      'summary': 'THAT WAS SO WONDERFUL',
      'description': 'Time stopped when we first met, I saw an angel walking by me and I cannot even breathe.I remember how you smiled at me when we first met, and everything just fell into their place.',
      "image": '../assets/stories/first.jpg',
      'date': '3 DECEMBER 2017'
    },
    {
      'title': 'Our First Hug',
      'summary': 'FEELING AWESOME :)',
      'description': 'One day he hug me so tight that all of my broken pieces stick back together and forever',
      "image": '../assets/stories/hug.jpg',
      'date': '3 DECEMBER 2017'
    },
  ];
}
