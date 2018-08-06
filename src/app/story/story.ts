import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.html',
  styleUrls: ['./story.scss']
})
export class StoryComponent implements OnInit {

  public storyData: object[] = [
    {
      count: "1",
      data: {
        img: "src",
        desc: ["","",""]
      }
    },{
      count: "2",
      data: {
        img: "src",
        desc: ["","",""]
      }
    },{
      count: "3",
      data: {
        img: "src",
        desc: ["","",""]
      }
    },{
      count: "4",
      data: {
        img: "src",
        desc: ["","",""]
      }
    }
  ];

  public ngOnInit(): void {
  }
}
