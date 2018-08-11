import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.html',
  styleUrls: ['./story.scss']
})
export class StoryComponent implements OnInit {

  public storyData: object[] = [
    {
      data: [
          { img: "p2.jpg" },
          {
            date: "20 December 2017",
            event: "First Meet",
            action: "Day that changed our life",
            desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit"
          }
      ]
    }, {
      data: [
        {
          date: "20 December 2017",
          event: "First Meet",
          action: "Day that changed our life",
          desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit"
        },
        { img: "p2.jpg" }
      ]
    }, {
      data: [
        { img: "p2.jpg" },
        {
          date: "20 December 2017",
          event: "First Meet",
          action: "Day that changed our life",
          desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit"
        }
      ]
    }, {
      data: [
        {
          date: "20 December 2017",
          event: "First Meet",
          action: "Day that changed our life",
          desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit"
        },
        { img: "p2.jpg" }
      ]
    }
  ];

  public ngOnInit(): void {
  }
}
